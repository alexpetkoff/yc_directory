import SearchForm from "../../components/SearchForm";
import StartupCard from "@/components/StartupCard";
import { StartupTypeCard } from "@/types/types";

export default async function Home({
    searchParams,
}: {
    searchParams: Promise<{ query?: string }>;
}) {
    const query = (await searchParams).query || "";

    const posts: StartupTypeCard[] = [
        {
            _createdAt: new Date().toISOString(),
            views: 55,
            author: { _id: 1, name: "Alexander" },
            _id: 1,
            description: "This is a description",
            image: "https://future-business.org/wp-content/uploads/2022/01/dreamstime_xxl_107550237-scaled.jpg",
            category: "Robots",
            title: "We Robots",
        },
    ];

    return (
        <>
            <section className="pink_container">
                <h1 className="heading">
                    Pitch your startup, <br /> Connect with Entreprenuers
                </h1>
                <p className="sub-heading !max-w-3xl">
                    Submit ideas, Vote on pitches, and get Noticed in Virtual
                    Competitions.
                </p>
                <SearchForm query={query} />
            </section>

            <section className="section_container">
                <p className="text-30-semibold">
                    {query ? `Search results for "${query}"` : "All Startups"}
                </p>
                <ul className="mt-7 card_grid">
                    {posts?.length > 0 ? (
                        posts.map((post, index: number) => (
                            <StartupCard key={post?._id} post={post} />
                        ))
                    ) : (
                        <p className="no-results">No startups found!</p>
                    )}
                </ul>
            </section>
        </>
    );
}
