import { getPosts } from '$lib/repositories/post';
import type { PageLoad } from './$types';
 
export const load : PageLoad = async ({ fetch })  => {
  const posts = await getPosts(fetch)
 
  return { posts };
}