import { Link } from "@inertiajs/react";
import React from "react";

const Pagination = ({ links }) => {
    // Find the current page
    const currentPage = parseInt(links.find((link) => link.active)?.label); // Get the current active page number
    const totalPages = links.length - 2; // Exclude Previous and Next links

    // Create a filtered array for pagination
    const filteredLinks = [];

    // Add "Previous" link if it exists
    const previousLink = links.find((link) => link.label.includes("Previous"));
    if (previousLink) {
        filteredLinks.push(previousLink);
    }

    // Determine the range of pages to display
    const displayPages = [];

    if (currentPage <= 3) {
        // Show first three pages
        displayPages.push(1, 2, 3);
    } else if (currentPage >= totalPages - 2) {
        // Show last three pages
        displayPages.push(totalPages - 2, totalPages - 1, totalPages);
    } else {
        // Show current page and one before and after
        displayPages.push(currentPage - 1, currentPage, currentPage + 1);
    }

    // Add ellipsis if there are more pages
    if (totalPages > 5) {
        if (currentPage > 3) {
            filteredLinks.push({ label: "...", url: null }); // Add ellipsis if not showing first pages
        }
    }

    // Add the calculated page links to filteredLinks
    displayPages.forEach((page) => {
        const pageLink = links.find((link) => link.label === page.toString());
        if (pageLink) {
            filteredLinks.push(pageLink);
        }
    });

    // Add ellipsis if there are more pages
    if (totalPages > 5 && currentPage < totalPages - 2) {
        filteredLinks.push({ label: "...", url: null }); // Add ellipsis if not showing last pages
    }

    // Add "Next" link if it exists
    const nextLink = links.find((link) => link.label.includes("Next"));
    if (nextLink) {
        filteredLinks.push(nextLink);
    }

    return (
        <nav className="flex justify-center items-center gap-x-1">
            {filteredLinks.map((link, index) => (
                <span key={index} className="p-2">
                    <Link
                        preserveScroll
                        href={link.url}
                        className={`min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex text-gray-800 justify-center items-center gap-x-2 text-sm rounded-lg ${
                            link.active ? "bg-gray-300" : ""
                        } ${
                            !link.url
                                ? "opacity-50 pointer-events-none "
                                : "hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                        }`}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                    ></Link>
                </span>
            ))}
        </nav>
    );
};

export default Pagination;
