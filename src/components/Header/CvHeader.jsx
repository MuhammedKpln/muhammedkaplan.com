export default function CvHeader({ profileImage }) {
  return (
    <>
      <header className="pt-4 flex justify-between">
        <a className="flex gap-x-4 items-center" href="/">
          {profileImage}

          <div>
            <h1 className="text-lg font-bold text-blue-500">Muhammed Kaplan</h1>
            <p className="text-gray-500 text-sm max-w-sm mt-2">
              Aspiring software developers on a journey of continuous learning
              and growth. Exploring the world of code, creating digital
              solutions and seeking new opportunities.
            </p>
          </div>
        </a>

        <div id="details" className="text-gray-500 text-sm w-1/4">
          <ul>
            <li>
              <a href="mailto:mmuhammedkaplan0@gmail.com">
                mmuhammedkaplan0@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+46738940403">+46738940403</a>
            </li>
            <li>
              <a href="https://github.com/muhammedkpln" target="_blank">
                github.com/muhammedkpln
              </a>
            </li>
            <li>
              <a href="https://muhammedkaplan.com" target="_blank">
                muhammedkaplan.com
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
