package schema

import (
	"entgo.io/ent"
	"entgo.io/ent/dialect/entsql"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
	"entgo.io/ent/schema/index"
	"github.com/42atomys/stud42/internal/models/gotype"
	"github.com/google/uuid"
)

type Account struct {
	ent.Schema
}

func (Account) Fields() []ent.Field {
	return []ent.Field{
		field.UUID("id", uuid.UUID{}).Unique().Immutable().Default(uuid.New).Annotations(entsql.Annotation{
			Default: "uuid_generate_v4()",
		}),
		field.Enum("type").GoType(gotype.AccountType("")),
		field.Enum("provider").GoType(gotype.AccountProvider("")),
		field.String("provider_account_id").NotEmpty().MaxLen(255),
		field.String("username").NotEmpty().MaxLen(255),
		field.Int("expires_at").Optional().Nillable(),
		field.String("token_type").NotEmpty().MaxLen(255),
		field.String("refresh_token").Unique().Optional().Nillable(),
		field.String("access_token").Unique().NotEmpty(),
		field.String("scope").NotEmpty().MaxLen(255),
		field.UUID("user_id", uuid.UUID{}),
		field.Bool("public").Default(true),
	}
}

func (Account) Edges() []ent.Edge {
	return []ent.Edge{
		edge.From("user", User.Type).Required().Field("user_id").Ref("accounts").Unique(),
	}
}

func (Account) Indexes() []ent.Index {
	return []ent.Index{
		index.Fields("provider", "provider_account_id").Unique(),
		index.Edges("user").Fields("provider").Unique(),
	}
}
