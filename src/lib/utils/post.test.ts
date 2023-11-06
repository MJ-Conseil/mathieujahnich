import { buildFakePost } from '$lib/fixtures/post';
import type { PostGroupedByCategories } from 'definitions';
import { groupPostByCategories } from './post';

describe('group post by categories', () => {
	it('should return a proper query string', () => {
		const group1_post1 = buildFakePost();
		const group1_post2 = buildFakePost();
		const group1_post3 = buildFakePost();

		const group2_post1 = buildFakePost();
		const group2_post2 = buildFakePost();
		const group2_post3 = buildFakePost();

		const categories = [
			{
				name: 'category-1',
				id: 11
			},
			{
				name: 'category-2',
				id: 22
			}
		];

		const result = groupPostByCategories(
			[
				[group1_post1, group1_post2, group1_post3],
				[group2_post1, group2_post2, group2_post3]
			],
			categories
		);

		const expectedResult: PostGroupedByCategories[] = [
			{
				categoryId: 11,
				categoryName: 'category-1',
				posts: [group1_post1, group1_post2, group1_post3]
			},
			{
				categoryId: 22,
				categoryName: 'category-2',
				posts: [group2_post1, group2_post2, group2_post3]
			}
		];
		expect(result).toEqual(expectedResult);
	});
});
