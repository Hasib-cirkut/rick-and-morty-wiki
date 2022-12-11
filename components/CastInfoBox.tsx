import Link from "next/link"
import { ReactNode } from "react"
import { Link as LinkIcon } from "./Icons"

type TCastInfoBoxProps = {
  children?: ReactNode
  info: { title: string; data: { label: string; url?: string } }
}

export default function CastInfoBox(props: TCastInfoBoxProps) {
  return (
    <div className="flex flex-col w-full items-start space-y-4 box px-4 pb-2 pt-4">
      {props.children}

      <div className="flex flex-col items-start w-full">
        <p className="text-sm font-tttravels">{props.info.title}</p>
        <div className="flex w-full justify-between items-center">
          <p className="text-lg md:text-[36px] font-tttravels-semibold">
            {props.info.data.label}
          </p>

          {props.info.data.url && (
            <Link href={props.info.data.url} target="_blank">
              <LinkIcon className="h-4 w-4 md:h-6 md:w-6" />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
