import { ArrowUp } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-end items-center">
      <div className="flex gap-5">
        {" "}
        <div className="">
          <p className="text-sm text-muted-foreground">
            {" "}
            &copy; {new Date().getFullYear()} Akshat Srivastava.
          </p>
        </div>
        <div className="flex gap-1">
          <a
            href="https://www.linkedin.com/in/akshat080901/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-800 dark:text-zinc-300 hover:text-primary transition"
            title="LinkedIn"
          >
            <SlSocialLinkedin size={20} />
          </a>
          <a
            href="https://twitter.com/your-handle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-800 dark:text-zinc-300 hover:text-primary transition"
            title="Twitter"
          >
            <FaXTwitter size={20} />
          </a>
          <a
            href="https://discord.com/users/your-discord-id"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-800 dark:text-zinc-300 hover:text-primary transition"
            title="Discord"
          >
            <FaDiscord size={20} />
          </a>
        </div>
        <a
          href="#hero"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};
