import axios from "axios";
import https from "https";
import Cookies from "js-cookie";
import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

export const logo = "/next.svg";

export const difficulty = { easy: 1, hard: 2 };
export const smallScreenWidth = 1024;

export const cookiesLang = "lang";

export const firstlang = "en";
export const secondlang = "ar";

export const responseOnSuccess = "success";
export const alertError = "An error occurred";

