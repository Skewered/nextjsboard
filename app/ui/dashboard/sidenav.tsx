import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    <div className="h-full px-2 py-4 flex flex-col">
      <Link
        className="h-[160px] bg-point-color2 rounded-md flex items-end p-4 sm:h-[80px]"
        href="/"
      >
        <AcmeLogo />
      </Link>
      <div className="flex flex-col gap-2 mt-2 flex-grow sm:flex-row">
        <NavLinks />
        <div className="bg-[#f9fafb] flex-grow sm:hidden"> </div>
        <form>
          <button
            type="submit"
            className="flex bg-[#f9fafb] w-full h-[48px] rounded-md items-center px-3 gap-2 text-[14px] hover:bg-[#e0f2fe] hover:text-[#2f6feb]"
          >
            <PowerIcon className="w-6" />
            <span className="sm:hidden">Sign Out</span>
          </button>
        </form>
      </div>
    </div>
  );
}
