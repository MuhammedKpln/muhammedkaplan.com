import type { IBookmarksResponse, INewBookmarkData } from "../types/api.ts";
import { API_PATHS } from "../types/api.ts";

export async function fetchBookmarks(
  limit?: number
): Promise<IBookmarksResponse> {
  const bookmarks = await fetch(API_PATHS.bookmarks, {
    method: "POST",
    body: limit
      ? JSON.stringify({
          limit,
        })
      : null,
  });

  return await bookmarks.json();
}

export async function newBookmarks(data: INewBookmarkData) {
  const bookmarks = await fetch(API_PATHS.newBookmark, {
    body: JSON.stringify(data),
    method: "POST",
  });

  return await bookmarks.json();
}
