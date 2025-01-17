import { client } from "@/sanity/lib/client";
import { STARTUP_BY_ID_QUERY } from "@/sanity/lib/queries";
import { formatDate } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";

export const experimental_ppr = true;

export default async function StartUpDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const post = await client.fetch(STARTUP_BY_ID_QUERY, { id });

  if (!post) return notFound();

  return (
    <>
      <section className="pink_container !min-h-[230px]">
        <p className="tag">{formatDate(post?._createdAt)}</p>

        <h1 className="heading">{post?.title}</h1>
        <p className="sub-heading !max-w-5xl">{post?.description}</p>
      </section>
      <section className="section_container">
        <img
          src={post?.image || ""}
          alt="thumbnail"
          className="w-1/2 max-h-[300px] rounded-xl mx-auto object-cover"
        />
        <div className="space-y-5 mt-10 max-w-4xl mx-auto">
          <div className="flex-between gap-5">
            <Link href={`/user/${post?.author?._id}`}>
              <Image
                src={post?.author?.image}
                alt="avatar"
                width={100}
                height={100}
              />
              <div className="">
                <p className="text-20-medium">{post?.author?.name}</p>
                <p className="text-16-medium !text-black-300">
                  @{post?.author?.username}
                </p>
              </div>
            </Link>
            <p className="category-tag">{post?.category}</p>
          </div>
          <h3 className="text-30-bold">Pitch Details:</h3>
          <div className="">{post?.pitch}</div>
        </div>
        {/* TODO: dynamic rendering of EDITOR SELECTED STARTUPS */}
        <Suspense fallback={<div className="view_skeleton"></div>}>
          <div className="view-container">
            <div className="absolute -top-2 -right-2">
              <div className="relative">
                <div className="absolute -left-4 top-1">
                  <span className="flex size-[11px]">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70"></span>
                    <span className="inline-flex rounded-full bg-primary size-[11px]"></span>
                  </span>
                </div>
              </div>
            </div>

            <p className="view-text">
              <span className="font-black">100 views</span>
            </p>
          </div>
        </Suspense>
      </section>
    </>
  );
}
