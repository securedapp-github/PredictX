import { Footer } from "flowbite-react";

function NewFooter() {
  return (
    <Footer container className="bg-mybg rounded-none mt-10">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
            // className="text-white"
            //   href="/"
            //   src="https://flowbite.com/docs/images/logo.svg"
            //   alt="Flowbite Logo"
            //   name="PredctX"
            />
          <h1 className="text-white mb-10  lg:ml-10 xl:ml-20 font-bold text-3xl">Predct<span className="text-5xl font-semibold text-red-700">X</span></h1>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-20">
            <div>
              <Footer.Title  title="Social Media"  className="text-white font-semibold text-md"/>
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-white font-light">Twitter</Footer.Link>
                <Footer.Link href="#" className="text-white font-light">Instagram</Footer.Link>
                <Footer.Link href="#" className="text-white font-light">Facebook</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Navigations" className="text-white font-semibold text-md" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-white font-light">Home</Footer.Link>
                <Footer.Link href="#" className="text-white font-light">Map</Footer.Link>
                <Footer.Link href="#" className="text-white font-light">Crime</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Others"  className="text-white font-semibold text-md"/>
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-white font-light">Victim profile</Footer.Link>
                <Footer.Link href="#" className="text-white font-light">Accused profile</Footer.Link>
                <Footer.Link href="#" className="text-white font-light">Contact</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full flex justify-center items-center ">
          <Footer.Copyright className="text-white" by="Made Remotely By Predcx™" year={new Date().getFullYear()} />
        </div>
      </div>
    </Footer>
  );
}
export default NewFooter;