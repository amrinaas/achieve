import React from "react";

const ContentLayout = ({ children }) => {
    return (
        <div className="max-w-7xl sm:px-3 lg:px-5">
            <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                {children}
            </div>
        </div>
    );
};

export default ContentLayout;
