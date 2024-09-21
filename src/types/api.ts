const path = (url: string) => {
  return `${import.meta.env.SUPABASE_EDGE_FUNCTION_URL}/${url}`;
};

export const API_PATHS = {
  bookmarks: path("get-bookmarks"),
  newBookmark: path("new-bookmark"),
};

export interface INewBookmarkData {
  title: string;
  description: string;
  href: string;
}

export interface IBookmark extends INewBookmarkData {
  created_at: string;
  $id: string;
}

export interface IBookmarksResponse {
  total: number;
  documents: IBookmark[];
}
