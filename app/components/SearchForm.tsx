import React from "react";
import Form from "next/form";
import SearchFormReset from "./SearchFormReset";

function SearchForm({ query }: { query?: string }) {
    return (
        <Form action="/" scroll={false} className="search-form">
            <input
                type="text"
                name="query"
                className="search-input placeholder:opacity-45"
                placeholder="Search Startups..."
            />
            <div className="flex gap-2">
                {query && <SearchFormReset />}
                <button type="submit" className="search-btn text-white">
                    S
                </button>
            </div>
        </Form>
    );
}

export default SearchForm;
