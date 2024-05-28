import React, { useState, useEffect } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import { fetchDataFromApi } from "@/utils/api";
import { useSelector } from "react-redux";
import { ShoppingCart } from "lucide-react";
import { UserRound } from "lucide-react";
import { Heart } from "lucide-react";
import { UserRoundCheck } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/router";

const isClient = typeof window !== "undefined";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [categories, setCategories] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();

  const { cartItems } = useSelector((state) => state.cart);
  const { favouritesItems } = useSelector((state) => state.favourites);

  const onSignOut=() => {
    sessionStorage.clear();
    router.push('/')
  }

  useEffect(() => {
    if (isClient) {
      // Ensure this code runs only on the client side
      const jwt = sessionStorage.getItem("jwt"); // Check if sessionStorage is available
      setIsLogin(jwt ? true : false); 
    }
  }, []);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("-translate-y-[80px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const { data } = await fetchDataFromApi("/api/categories?populate=*");
    setCategories(data);
  };

  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-center z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      {showSearch && <SearchItem setShowSearch={setShowSearch} />}
      <Link href="/">
        <img
          src="/logo.png"
          className="w-[50px] md:w-[80px] absolute left-10 top-2 "
        />
      </Link>

      <Wrapper className="h-[70px] flex  items-center justify-center px-3 md:px-8 ">
        <Menu
          showCatMenu={showCatMenu}
          setShowCatMenu={setShowCatMenu}
          categories={categories}
        />

        {mobileMenu && (
          <MenuMobile
            showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}
            setMobileMenu={setMobileMenu}
            categories={categories}
          />
        )}
      </Wrapper>

      <div className="-ml-[140px]">
        <div className="flex items-center gap-1 text-black pr-[30px]">
         
          {/* Icons start */}
          <Link href="/wishlist">
            <div className="w-6 md:w-12 z-2 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.04] cursor-pointer relative">
              <Heart className="text-[19px] md:text-[24px]" />
              {favouritesItems.length > 0 && (
                <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                  {favouritesItems.length}
                </div>
              )}
            </div>
          </Link>

          {/* Cart Icon Start */}
          <Link href="/cart">
            <div className="w-8 md:w-12 z-2 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
              <ShoppingCart className="text-[15px] md:text-[20px]" />
              {cartItems.length > 0 && (
                <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                  {cartItems.length}
                </div>
              )}
            </div>
          </Link>
          {/* cart Icons end */}

          {!isLogin ? (
            <Link href="/login">
              <div className="w-8 md:w-12 z-2 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
                <UserRound className="text-[15px] md:text-[20px]" />
              </div>
            </Link>
          ) : (
            <div className="w-8 md:w-12 z-2 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <UserRoundCheck className="text-[15px] md:text-[20px]" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="px-2 py-2">
                  <DropdownMenuLabel>Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem >Profile</DropdownMenuItem>
                  <DropdownMenuItem>Orders</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => onSignOut()}>Log Out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}

          {/* Mobile icon */}
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
            {mobileMenu ? (
              <VscChromeClose
                className="text-[16px]"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className="text-[20px]"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
          {/* Mobile icon end */}
        </div>
      </div>
    </header>
  );
};

export default Header;
