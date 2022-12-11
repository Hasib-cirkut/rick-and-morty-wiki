import { Next as NextIcon, Previous as PreviousIcon } from "./Icons"

function Pagination(props: {
  setPage: (type: "INC" | "DEC") => void
  page: number
  totalPage: number
}) {
  return (
    <div className="flex items-center space-x-4">
      <p className="text-white">Page</p>

      <PreviousIcon
        onClick={() => props.setPage("DEC")}
        className="cursor-pointer"
      />

      <p className="px-12 py-2 text-secondary border rounded-full">
        {props.page}
      </p>

      <NextIcon
        onClick={() => props.setPage("INC")}
        className="cursor-pointer"
      />

      <p className="text-white">of {props.totalPage}</p>
    </div>
  )
}

export default Pagination
