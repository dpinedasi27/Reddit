function Info() {
    return (
        <div className="bg-white rounded-lg shadow-md p-1 space-y-1">
            {/* Header */}
            <div className="bg-blue-950 h-10 text-white flex items-center p-1">
                Info
            </div>

            {/* Body */}
            <div className="p-4 space-y-4">
                {/* List of information */}
                <ul className="list-inside list-disc space-y-2">
                    <li>
                        <span>Do you have a question? Check out <a href="/r/learnprogramming" className="text-orange-500 hover:underline">/r/learnprogramming</a>, <a href="/r/other" className="text-orange-500 hover:underline">/r/other</a>, or <a href="https://stackoverflow.com" className="text-orange-500 hover:underline">Stack Overflow</a>.</span>
                    </li>
                    <li>
                        <span>Do you have something funny to share with fellow programmers? Please take it to <a href="/r/programminghumor" className="text-orange-500 hover:underline">/r/programminghumor</a>.</span>
                    </li>
                    <li>
                        <span>For posting jobs, please visit <a href="/r/onhire" className="text-orange-500 hover:underline">/r/onhire</a>.</span>
                    </li>
                    <li>Check out our tag. It could use some updating.</li>
                    <li>
                        <span>Are you interested in promoting your own content? <a href="/r/promote" className="text-orange-500 hover:underline">Read this first</a>.</span>
                    </li>
                </ul>

                {/* Separator */}
                <div className="border-t border-gray-300 my-4"></div>

                {/* Related Reddit section */}
                <div>
                    <strong>Related Reddits</strong>
                    <ul className="list-inside list-disc space-y-2 mt-2">
                        <li><a href="/r/coding" className="text-orange-500 hover:underline">/r/coding</a></li>
                        <li><a href="/r/technews" className="text-orange-500 hover:underline">/r/technews</a></li>
                        <li><a href="/r/webdev" className="text-orange-500 hover:underline">/r/webdev</a></li>
                        <li><a href="/r/opensource" className="text-orange-500 hover:underline">/r/opensource</a></li>
                        <li><a href="/r/ai" className="text-orange-500 hover:underline">/r/ai</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Info;
