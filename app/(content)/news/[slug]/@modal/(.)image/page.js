"use client";

import { useRouter, notFound } from "next/navigation";
import { DUMMY_NEWS } from "@/dummy-news";

export default function InterceptedImagePage({ params }) {
  const router = useRouter();

  const newsItemSlug = params.slug;
  const newsItem = DUMMY_NEWS.find(
    (newsItem) => newsItem.slug === newsItemSlug
  );

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <div onClick={router.back} className="modal-backdrop" />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
            width="100%"
          />
        </div>
      </dialog>
    </>
  );
}
