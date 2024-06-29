import { Campus } from '../campus';
import { Cluster } from '../cluster';
import { ICampus } from '../types';

export class Luxembourg extends Campus implements ICampus {
  emoji = (): string => '🇱🇺';

  name = (): string => 'Luxembourg';

  extractorRegexp = (): RegExp =>
    /(?<clusterWithLetter>c(?<cluster>\d+))(?<rowWithLetter>r(?<row>\d+))(?<workspaceWithLetter>p(?<workspace>\d+))/i;

  clusters(): Cluster[] {
    return [
      new Cluster({
        identifier: 'c1',
        name: 'Cluster 1',
        map: [
          ['T:r10',  null, 'W:c1r10s1', 'W:c1r10s2', 'W:c1r10s3', 'W:c1r10s4', null, 'T:r10'],
          ['T:r9',   null, 'W:c1r9s1',  'W:c1r9s2',  'W:c1r9s3',  'W:c1r9s4', null, 'T:r9'],
          ['T:r8',   null, 'W:c1r8s1',  'W:c1r8s2',  'W:c1r8s3',  'W:c1r8s4', 'W:c1r8s5', 'T:r8'],
          ['T:r7',   null, 'W:c1r7s1',  'W:c1r7s2',  'W:c1r7s3',  'W:c1r7s4', 'W:c1r7s5', 'T:r7'],
          ['T:r6',   null, 'W:c1r6s1',  'W:c1r6s2',  'W:c1r6s3',  'W:c1r6s4', 'W:c1r6s5', 'T:r6'],
          ['T:r5',   null, 'W:c1r5s1',  'W:c1r5s2',  'W:c1r5s3',  'W:c1r5s4', 'W:c1r5s5', 'T:r5'],
          ['T:r4',   null, 'W:c1r4s1',  'W:c1r4s2',  'W:c1r4s3',  'W:c1r4s4', 'W:c1r4s5', 'T:r4'],
          ['T:r3',   null, 'W:c1r3s1',  'W:c1r3s2',  'W:c1r3s3',  'W:c1r3s4', 'W:c1r3s5', 'T:r3'],
          ['T:r2',   null, 'W:c1r2s1',  'W:c1r2s2',  'W:c1r2s3',  'W:c1r2s4', 'W:c1r2s5', 'W:c1r2s6', 'T:r2'],
          ['T:r1',   null, 'W:c1r1s1',  'W:c1r1s2',  'W:c1r1s3',  'W:c1r1s4', 'W:c1r1s5', 'W:c1r1s6', 'T:r1'],
        ],
      }),
      new Cluster({
        identifier: 'c2',
        name: 'Cluster 2',
        map: [
          ['T:r10',  null, 'W:c2r10s5', 'W:c2r10s4', 'W:c2r10p3', 'W:c2r10s2', 'W:c2r10s1', null, null, 'T:r10'],
          ['T:r9',   null, 'W:c2r9s5',  'W:c2r9s4',  'W:c2r9s3',  'W:c2r9s2',  'W:c2r9s1',  null,  null, 'T:r9'],
          ['T:r8',   null, 'W:c2r8s5',  'W:c2r8s4',  'W:c2r8s3',  'W:c2r8s2',  'W:c2r8s1',  null,  null, 'T:r8'],
          ['T:r7',   null, 'W:c2r7s5',  'W:c2r7s4',  'W:c2r7s3',  'W:c2r7s2',  'W:c2r7s1',  null,  null, 'T:r7'],
          ['T:r6',   null, 'W:c2r6s5',  'W:c2r6s4',  'W:c2r6s3',  'W:c2r6s2',  'W:c2r6s1',  null,  null, 'T:r7'],
          ['T:r5',   null, 'W:c2r5s5',  'W:c2r5s4',  'W:c2r5s3',  'W:c2r5s2',  'W:c2r5s1',  null,  null, 'T:r7'],
          ['T:r4',   null, 'W:c2r45',  'W:c2r4s4',  'W:c2r4s3',  'W:c2r4s2',  'W:c2r4s1',  null,  null, 'T:r7'],
          ['T:r3',   null, 'W:c2r3s5',  'W:c2r3s4',  'W:c2r3s3',  'W:c2r3s2',  'W:c2r3s1',  null,  null, 'T:r7'],
          ['T:r2',   'W:C2r2s6', 'W:c2r2s5',  'W:c2r2s4',  'W:c2r2s3',  'W:c2r2s2',  'W:c2r2s1',  null,  null, 'T:r7'],
          ['T:r1',   'W:c2r1s6', 'W:c2r1s5',  'W:c2r1s4',  'W:c2r1s3',  'W:c2r1s2',  'W:c2r1s1',  null,  null, 'T:r7'],
        ],
      }),
