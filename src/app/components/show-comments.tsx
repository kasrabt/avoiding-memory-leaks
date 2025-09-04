/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";

export default function ShowComments() {
  const [timer, setTimer] = useState(new Date().toLocaleTimeString());
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState<{ email: string; body: string }[]>(
    [],
  );

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchComments = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/comments",
          { signal },
        );
        const data = (await response.json()) as {
          email: string;
          body: string;
        }[];
        setComments(data);
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        if (!error || error.name === "AbortError") return;
        console.error(error);
      }
    };

    void fetchComments();
    const interval = setInterval(() => {
      console.log("timer");
      setTimer(new Date().toLocaleTimeString());
    }, 1000);

    const handleResize = () => {
      console.log("resize");
    };

    window.addEventListener("resize", handleResize);

    return () => {
      // READ THIS 👇🏻👇🏻👇🏻👇🏻👇🏻
      // FOR THE FIRST TIME PLEASE CHECK CONSOLE LOG THEN UNCOMMENT THIS LINE
      //   controller.abort("Component unmounted");
      //   clearInterval(interval);
      //   window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full">
      <p className="mx-auto mb-5 flex w-fit items-center justify-center rounded-lg bg-white px-4 py-2 font-medium text-black">
        Timer: {timer}
      </p>
      {loading ? (
        <div className="flex w-full items-center justify-center">
          <span className="w-fit rounded-md bg-purple-900 px-3 py-1 text-xs font-bold text-white">
            Loading ...
          </span>
        </div>
      ) : (
        <>
          <h1 className="mx-auto mb-5 flex w-fit items-center justify-center rounded-lg bg-gradient-to-b from-[#ffffff] to-[#8d8d8d] px-4 py-2 font-medium text-black">
            Comments 👇🏻
          </h1>
          <ul>
            {comments?.slice(0, 5).map((comment, index) => (
              <li
                key={index}
                className="mx-auto mb-5 flex max-w-[50%] flex-col items-center justify-center gap-3 rounded-lg bg-gradient-to-b from-[#ffffff] to-[#8d8d8d] px-4 py-2 font-medium text-black"
              >
                <div className="flex w-full flex-col items-start gap-1">
                  <span className="rounded-md bg-purple-900 px-3 py-1 text-xs font-bold text-white">
                    Sent By
                  </span>
                  <h2 className="text-xs font-medium text-gray-700">
                    {" "}
                    {comment.email}
                  </h2>
                </div>
                <div className="flex w-full flex-col items-start gap-1">
                  <span className="rounded-md bg-purple-900 px-3 py-1 text-xs font-bold text-white">
                    Comment
                  </span>
                  <p className="text-xs font-medium text-gray-700">
                    {" "}
                    {comment.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
