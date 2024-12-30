import { ROUTES } from '$lib/constants';
import { redirect } from '@sveltejs/kit';

export function load() {
    // This page was removed on December 24. We keep a redirection for SEO reasons.
    throw redirect(302, ROUTES['À propos']);
}