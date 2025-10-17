import "./Footer.css";

export default function Footer() {

  return (

    <footer className="flex items-center justify-center border-t-1 border-[#266f32] !px-4">
      <div className="flex flex-col gap-6 w-full max-w-[1000px] !py-6">
        <div className="flex justify-between flex-row">
          <div>
            x
          </div>
          <div className="flex flex-row gap-10">
            <div>
              <h1>Lorem</h1>
              <ul>
                <li>z</li>
                <li>y</li>
                <li>x</li>
              </ul>
            </div>
            <div>
              <h1>Lorem</h1>
              <ul>
                <li>z</li>
                <li>y</li>
                <li>x</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-between flex-row">
          <p>x</p>
          <p>xxx</p>
        </div>
      </div>
    </footer>

  )

}