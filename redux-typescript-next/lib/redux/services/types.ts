export interface UserModel
{
    "id": number;
    "name": string;
    "username": string;
    "email": string;

}
export interface Todo
{
    "_id":string;
    "title":string;
    "completed":boolean;
}
export interface Movie
{
    "_id"?: string;
    "title": string;
    "director": {
        "name": string,
        "phoneNo": string,
        "_id"?: string;
    },
    "year": 2025,
}
export interface Review
{
    "movie"?:string;
    "_id"?: string;
    rating:number;
    review:string;
}
export interface AuthRequest
{
    userName:string;
    password:string;
}
export interface AuthResponse
{
    token:string;
}