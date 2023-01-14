export type Fetch = (request: Request) => Promise<Response>;

export type Post = {
    title: string,
    imageUrl: string,
}