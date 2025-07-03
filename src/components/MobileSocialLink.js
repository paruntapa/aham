import Link from "next/link";

export default function MobileSocialLink({ type }) {
  let href = "";
  let label = "";

  switch (type) {
    case "github":
      href = "https://github.com/paruntapa";
      label = "GitHub";
      break;
    case "linkedin":
      href = "https://www.linkedin.com/in/anuj-kumar-73b1b5321/";
      label = "LinkedIn";
      break;
    case "x":
      href = "https://x.com/tel_zac";
      label = "X";
      break;
  }

  return (
    <Link
      href={href}
      target="_blank"
      className="h-full w-full relative flex justify-center items-center text-neutral-700 dark:text-neutral-200"
      aria-label={label}
    >
      {type === "github" && <GithubIcon />}
      {type === "linkedin" && <LinkedInIcon />}
      {type === "codepen" && <CodePenIcon />}
      {type === "artstation" && <ArtStationIcon />}
      {type === "notion" && <NotionIcon />}
      {type === "x" && <XIcon />}

    </Link>
  );
}

function GithubIcon() {
  return (
    <svg
      className="size-8 pointer-events-none"
      fill="currentColor"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: "translateZ(0)",
      }}
    >
      <title>GitHub</title>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      className="size-8 pointer-events-none"
      fill="currentColor"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: "translateZ(0)",
      }}
    >
      <title>LinkedIn</title>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function CodePenIcon() {
  return (
    <svg
      className="size-8 pointer-events-none"
      fill="none"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
      style={{
        transform: "translateZ(0)",
      }}
      strokeLinejoin="round"
      role="img"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>CodePen</title>
      <path d="M3.06 41.732L32 60.932l28.94-19.2V22.268L32 3.068l-28.94 19.2zm57.878 0L32 22.268 3.06 41.732m0-19.463L32 41.47l28.94-19.2M32 3.068v19.2m0 19.463v19.2" />
    </svg>
  );
}

function ArtStationIcon() {
  return (
    <svg
      className="size-8 pointer-events-none"
      fill="currentColor"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: "translateZ(0)",
      }}
    >
      <title>ArtStation</title>
      <path d="M0 17.723l2.027 3.505h.001a2.424 2.424 0 0 0 2.164 1.333h13.457l-2.792-4.838H0zm24 .025c0-.484-.143-.935-.388-1.314L15.728 2.728a2.424 2.424 0 0 0-2.142-1.289H9.419L21.598 22.54l1.92-3.325c.378-.637.482-.919.482-1.467zm-11.129-3.462L7.428 4.858l-5.444 9.428h10.887z" />
    </svg>
  );
}

function NotionIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
    <path d="M 42.019531 4 C 41.350297 3.998125 40.569828 4.0454531 39.611328 4.1269531 L 8.3945312 6.4140625 C 5.8765313 6.6300625 5 8.2646562 5 10.222656 L 5 44.193359 C 5 45.718359 5.5463281 47.022625 6.8613281 48.765625 L 14.199219 58.238281 C 15.404219 59.762281 16.500734 60.089469 18.802734 59.980469 L 55.056641 57.800781 C 58.122641 57.585781 59 56.169391 59 53.775391 L 59 15.558594 C 59 14.251594 58.450641 13.926516 56.806641 12.728516 L 46.841797 5.7597656 C 45.035047 4.4547656 44.027234 4.005625 42.019531 4 z M 41.373047 6.9882812 C 43.348223 7.0202598 44.474406 7.7785 45.347656 8.453125 L 50.556641 12.201172 C 50.777641 12.311172 51.332016 12.970703 50.666016 12.970703 L 19.298828 14.845703 C 15.971828 15.067703 15.306156 15.176141 13.535156 13.744141 L 9.2128906 10.326172 C 8.7708906 9.8841719 8.9926094 9.3336094 10.099609 9.2246094 L 40.472656 7.0214844 C 40.791156 6.9939844 41.090879 6.9837129 41.373047 6.9882812 z M 53.671875 17.009766 C 54.582299 17.101627 55 17.84175 55 19.078125 L 55 51.304688 C 55 52.720687 54.7795 53.920344 52.8125 54.027344 L 18.839844 55.988281 C 16.872844 56.095281 16 55.442219 16 53.699219 L 16 21.257812 C 16 19.842813 16.437047 19.186125 17.748047 19.078125 L 53.251953 17.011719 C 53.402328 16.997969 53.541814 16.996643 53.671875 17.009766 z M 50 22.5 L 43 23 C 41.359 23.196 40.5 24 40.5 25 L 43.5 25.5 L 43.5 40.5 L 32 23.5 L 24.201172 24.1875 C 22.662172 24.3795 22.12375 25.7085 22.34375 26.6875 L 25 27 L 25 48 L 24 48.5 C 22 49 22.5 50 22.5 50.5 L 30.5 50 C 33 49.5 33 48 33 48 L 29 47 L 29 31 L 39.935547 47.970703 C 41.244547 49.599703 41.751 50.5 43.5 50.5 C 45 50.5 46.5 50 47.5 49 L 47.5 25 L 48.892578 24.732422 C 49.999578 24.500422 50.5 23.5 50 22.5 z"></path>
    </svg>
  );
}


function XIcon() {
  return (
    <svg
      className="size-8 pointer-events-none"
      fill="currentColor"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: "translateZ(0)",
      }}
    >
      <title>X</title>
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  );
}
