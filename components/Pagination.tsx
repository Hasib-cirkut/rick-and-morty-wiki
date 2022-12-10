function Pagination(props: {
  setPage: (type: "INC" | "DEC") => void
  page: number
  setInput: (event: React.ChangeEvent<HTMLInputElement>) => void
}) {
  return (
    <div className="flex space-x-4">
      <p>Page</p>

      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => props.setPage("DEC")}
      >
        <g clip-path="url(#clip0_2_1260)">
          <path
            d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20ZM12 11H16V13H12V16L8 12L12 8V11Z"
            fill="#888888"
          />
        </g>
        <defs>
          <clipPath id="clip0_2_1260">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <input type="text" value={props.page} onChange={props.setInput} />

      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => props.setPage("INC")}
      >
        <g clip-path="url(#clip0_2_1265)">
          <path
            d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 11H8V13H12V16L16 12L12 8V11Z"
            fill="#14D9E6"
          />
        </g>
        <defs>
          <clipPath id="clip0_2_1265">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <p>of 42</p>
    </div>
  )
}

export default Pagination
