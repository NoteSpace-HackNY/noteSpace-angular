import { User } from './user.model';

export class Workspace {
    owner: User;
    title: string;
    members: User[];
}
