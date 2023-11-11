"use client";

import classNames from "classnames";
import React, {useEffect, useState} from "react";
import useSWR from 'swr'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCogs, faHeart, faX} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import {H1} from "@/components/ui/Typography/H1";

declare global {
  interface Window {
    Prism: any;
  }
}

const fetcher = async (...args: [string, RequestInit?]) => await fetch(...args).then(async res => {
  const response = await res.json()
  console.log(response)
  return response
})

export function NodeDetails() {
  const route = `http://65.108.1.20:7777/api/nodes/org_2XQOxNamtty4AnwFGyepkxOdq7F`
  console.log(route)

  const {data, error, isValidating} = useSWR(route, fetcher, {
    revalidateIfStale: true,
    revalidateOnFocus: true,
    refreshInterval: 30000
  })

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1500);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <div className="mt-12 transition-all delay-300 transition">
        {data && data.length > 0 ? (
          <div className="w-1/2 mx-auto">
            <H1>
              Nodes
            </H1>
            <ul role="list"
                className="text-gray-900 divide-y divide-gray-200 bg-white shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              {
                data.sort((first: any, second: any) => {
                  return (first.state == "SETUP" ? -10 : first.state == "OFFLINE" ? 199 : 0) - (second.state == "SETUP" ? -10 : second.state == "OFFLINE" ? 199 : 0)
                }).map((node: any) => {
                  const date = Date.now() - node.pushedAt
                  if (date > 60 * (60 * 1000)) return null
                  const state = node.state != "OFFLINE" && date > 60 * 1000 ? "CRASHED" : node.state

                  return (
                    <li
                      key={node.identifier}
                      className="transition-all delay-150 duration-200 px-4"
                    >
                      <Link
                        href={state === "OFFLINE" ? "/dashboard" : `/dashboard/nodes/${node.identifier}`}
                        className="grid grid-cols-12 my-1 w-full py-3 border-neutral-400 dark:border-neutral-900">

                                                 <span className="m-auto col-span-1">
                                                    {state === "ONLINE" ? (
                                                      <span
                                                        className="text-green-400 mx-auto w-fit text-lg border-green-600 btn font-extrabold animate-pulse">
                                                            <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                                                        </span>
                                                    ) : (state === "BOOTING" ? (
                                                      <span
                                                        className="text-amber-400 mx-auto my-auto w-fit text-lg border-amber-600 btn font-extrabold animate-pulse">
                                                            <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                                                        </span>
                                                    ) : (state === "SETUP" ? (
                                                      <span
                                                        className="text-blue-400 mx-auto my-auto w-fit text-lg border-blue-600 btn font-extrabold animate-pulse">
                                                            <FontAwesomeIcon icon={faCogs}></FontAwesomeIcon>
                                                        </span>
                                                    ) : (state === "CRASHED" ? (
                                                      <span
                                                        className="text-red-700 mx-auto my-auto w-fit text-lg border-red-900 btn font-extrabold animate-pulse">
                                                            <FontAwesomeIcon icon={faX}></FontAwesomeIcon>
                                                        </span>
                                                    ) : (
                                                      <span
                                                        className="text-red-400 mx-auto my-auto w-fit text-lg border-red-600 btn font-extrabold animate-pulse">
                                                            <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                                                        </span>
                                                    ))))}
                                                </span>

                        <span
                          className='text-mds my-auto col-span-5 flex flex-col ml-2 tracking-widest mr-auto border-black'>
                                                        <span className="font-extrabold">
                                                            {
                                                              node.name
                                                            }
                                                        </span>
                                                    <span className="-mt-1 text-sm w-56 dark:text-neutral-300">
                                                        {
                                                          state == "OFFLINE" ? "offline since" : state == "CRASHED" ? "crashed" : "updated"
                                                        } {
                                                      date < 2000 ? "just now" : (date > (60 * 1000) ? (date / 60000).toString().split(".")[0] + "m" : (date / 1000).toString().split(".")[0] + "s")
                                                    } {
                                                      date > 2000 ? "ago" : ""
                                                    }
                                                    </span>
                                                </span>
                        <div className="flex flex-row col-span-6">
                                                    <span className="hidden xl:flex flex-col text-right my-auto">
                                                        <span className="text-xs dark:text-neutral-700 font-bold">
                                                            Node #{node.identifier}
                                                        </span>
                                                        <span className="text-xs dark:text-neutral-700 font-bold">
                                                            Host @{node.href || "master"}
                                                        </span>
                                                    </span>
                        </div>

                      </Link>
                    </li>
                  );
                })
              }
            </ul>
          </div>
        ) : (
          <div className="text-gray-50 px-8 pb-5 text-2xl text-center transition-all delay-300">
            There are no nodes found on this organization you can follow our node setup guide <Link
            className="text-amber-400" href={"/"}>here</Link>
          </div>
        )
        }

      </div>
    </div>
  );
}


function Toggle(props: {
  checked: boolean;
  onChange: () => void;
  disabled: boolean;
}) {
  return (
    <div className="flex items-center justify-end flex-1">
      <button
        disabled={props.disabled}
        onClick={props.onChange}
        className={classNames({
          "rounded-l-lg py-2 px-4 border-solid border border-neutral-300 transition text-sm font-semibold":
            true,
          "bg-neutral-100": !props.checked,
          "bg-neutral-50 text-neutral-500 cursor-not-allowed": props.disabled,
        })}
      >
        List
      </button>
      <button
        disabled={props.disabled}
        onClick={props.onChange}
        className={classNames({
          "rounded-r-lg py-2 px-4 border-solid border border-neutral-300 -ml-[1px] transition text-sm font-semibold":
            true,
          "bg-neutral-100": props.checked,
          "bg-neutral-50 text-neutral-500 cursor-not-allowed": props.disabled,
        })}
      >
        JSON
      </button>
    </div>
  );
}

function CopyButton(props: { text: string }) {
  const [tooltipShown, setTooltipShown] = useState(false);

  useEffect(() => {
    if (tooltipShown) {
      const timeout = setTimeout(() => setTooltipShown(false), 2000);
      return () => clearTimeout(timeout);
    }
  }, [tooltipShown]);

  return (
    <>
      <button
        onClick={() => {
          if (navigator.clipboard) navigator.clipboard.writeText(props.text);
          setTooltipShown(true);
        }}
      >
        <CopyIcon/>
      </button>

      <div
        className={classNames({
          "absolute z-10 bg-neutral-900 text-white rounded p-2 text-xs transition-all ease-in-out translate-x-60 shadow-sm shadow-neutral-500":
            true,
          "translate-y-10 opacity-0": !tooltipShown,
          "translate-y-6": tooltipShown,
        })}
      >
        Copied!
      </div>
    </>
  );
}

function JSONOutput(props: { json: any }) {
  useEffect(() => {
    if (window.Prism) {
      console.log(`highlighting`);
      window.Prism.highlightAll();
    }
  }, []);

  return (
    <pre className="px-8 sm:px-6 text-black text-sm">
      <code className="language-json">
        {JSON.stringify(props.json, null, 2)}
      </code>
    </pre>
  );
}
