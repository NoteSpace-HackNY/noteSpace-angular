import { User } from './user.model';

export class Workspace {
    id?: number;
    owner?: number;
    title: string;
    members: User[];
}
