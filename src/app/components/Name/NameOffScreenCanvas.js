"use client";

import React from "react";
import clsx from "clsx";

const name_big_svg =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjA5Mi4zNjAwMDk3NjU2MjVweCIgaGVpZ2h0PSIzODguMjc5OTkyNjc1NzgxMnB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii03OTYuMTgwMDA0ODgyODEyNSAtMTE5LjEzOTk5NjMzNzg5MDYxIDIwOTIuMzYwMDA5NzY1NjI1IDM4OC4yNzk5OTI2NzU3ODEyIiBzdHlsZT0iYmFja2dyb3VuZDogbm9uZTsiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIj48ZGVmcz48ZmlsdGVyIGlkPSJlZGl0aW5nLWhvbGUiIHg9Ii0xMDAlIiB5PSItMTAwJSIgd2lkdGg9IjMwMCUiIGhlaWdodD0iMzAwJSI+PGZlRmxvb2QgZmxvb2QtY29sb3I9IiMwMDAiIHJlc3VsdD0iYmxhY2siPjwvZmVGbG9vZD48ZmVNb3JwaG9sb2d5IG9wZXJhdG9yPSJkaWxhdGUiIHJhZGl1cz0iMiIgaW49IlNvdXJjZUdyYXBoaWMiIHJlc3VsdD0iZXJvZGUiPjwvZmVNb3JwaG9sb2d5PjxmZUdhdXNzaWFuQmx1ciBpbj0iZXJvZGUiIHN0ZERldmlhdGlvbj0iNCIgcmVzdWx0PSJibHVyIj48L2ZlR2F1c3NpYW5CbHVyPjxmZU9mZnNldCBpbj0iYmx1ciIgZHg9IjIiIGR5PSIyIiByZXN1bHQ9Im9mZnNldCI+PC9mZU9mZnNldD48ZmVDb21wb3NpdGUgb3BlcmF0b3I9ImF0b3AiIGluPSJvZmZzZXQiIGluMj0iYmxhY2siIHJlc3VsdD0ibWVyZ2UiPjwvZmVDb21wb3NpdGU+PGZlQ29tcG9zaXRlIG9wZXJhdG9yPSJpbiIgaW49Im1lcmdlIiBpbjI9IlNvdXJjZUdyYXBoaWMiIHJlc3VsdD0iaW5uZXItc2hhZG93Ij48L2ZlQ29tcG9zaXRlPjwvZmlsdGVyPjwvZGVmcz48ZyBmaWx0ZXI9InVybCgjZWRpdGluZy1ob2xlKSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUwOC45MDAwMjQ0MTQwNjI1LCAxNDUpIj48cGF0aCBkPSJNMTUzLjgwIDBMMTA3IDBMMTAxLjIwLTE5LjQwTDUzLTE5LjQwTDQ3LjIwIDBMMiAwTDUyLjIwLTEzNy42MEwxMDMuNjAtMTM3LjYwTDE1My44MCAwWk03Ni44MC05OS4yMEw2Mi4yMC01MC4yMEw5Mi01MC4yMEw3Ny42MC05OS4yMEw3Ni44MC05OS4yMFpNMzA3LjQwIDBMMjY4LjgwIDBMMjExLjAwLTY2LjgwTDIxMS4wMCAwTDE3MC40MCAwTDE3MC40MC0xMzcuNjBMMjA5LjAwLTEzNy42MEwyNjYuODAtNjkuODBMMjY2LjgwLTEzNy42MEwzMDcuNDAtMTM3LjYwTDMwNy40MCAwWk00NzQuMDAtNTUuNDBMNDc0LjAwLTU1LjQwUTQ3NC4wMC0yNy4yMCA0NTYuMjAtMTIuNDBMNDU2LjIwLTEyLjQwTDQ1Ni4yMC0xMi40MFE0MzguNDAgMi40MCA0MDUuNjAgMi40MEw0MDUuNjAgMi40MEw0MDUuNjAgMi40MFEzNzIuODAgMi40MCAzNTQuOTAtMTIuNDBMMzU0LjkwLTEyLjQwTDM1NC45MC0xMi40MFEzMzcuMDAtMjcuMjAgMzM3LjAwLTU1LjQwTDMzNy4wMC01NS40MEwzMzcuMDAtMTM3LjYwTDM4MS4yMC0xMzcuNjBMMzgxLjIwLTU2TDM4MS4yMC01NlEzODEuMjAtNDQuNDAgMzg3LjQwLTM3LjUwTDM4Ny40MC0zNy41MEwzODcuNDAtMzcuNTBRMzkzLjYwLTMwLjYwIDQwNS40MC0zMC42MEw0MDUuNDAtMzAuNjBMNDA1LjQwLTMwLjYwUTQxNy4yMC0zMC42MCA0MjMuNTAtMzcuNjBMNDIzLjUwLTM3LjYwTDQyMy41MC0zNy42MFE0MjkuODAtNDQuNjAgNDI5LjgwLTU2TDQyOS44MC01Nkw0MjkuODAtMTM3LjYwTDQ3NC4wMC0xMzcuNjBMNDc0LjAwLTU1LjQwWk02MDcuNDAtNDcuODBMNjA3LjQwLTQ3LjgwUTYwNy40MC0yMiA1OTIuNzAtOS44MEw1OTIuNzAtOS44MEw1OTIuNzAtOS44MFE1NzguMDAgMi40MCA1NTAuNDAgMi40MEw1NTAuNDAgMi40MEw1NTAuNDAgMi40MFE1MjIuODAgMi40MCA1MDguMTAtOS44MEw1MDguMTAtOS44MEw1MDguMTAtOS44MFE0OTMuNDAtMjIgNDkzLjQwLTQ3LjgwTDQ5My40MC00Ny44MEw0OTMuNDAtNDkuNjBMNTM0LjgwLTQ5LjYwTDUzNC44MC00OEw1MzQuODAtNDhRNTM0LjgwLTM4LjYwIDUzOC4zMC0zNC42MEw1MzguMzAtMzQuNjBMNTM4LjMwLTM0LjYwUTU0MS44MC0zMC42MCA1NDkuMDAtMzAuNjBMNTQ5LjAwLTMwLjYwTDU0OS4wMC0zMC42MFE1NTYuMjAtMzAuNjAgNTU5LjcwLTM0LjYwTDU1OS43MC0zNC42MEw1NTkuNzAtMzQuNjBRNTYzLjIwLTM4LjYwIDU2My4yMC00OEw1NjMuMjAtNDhMNTYzLjIwLTEzNy42MEw2MDcuNDAtMTM3LjYwTDYwNy40MC00Ny44MFpNNzQ3LjgwLTc4LjgwTDc5Ni44MC0xMzcuNjBMODUxLjYwLTEzNy42MEw4MDIuMjAtODFMODUyLjYwIDBMODAwLjQwIDBMNzcxLjgwLTUwLjQwTDc0Ny44MC0zMC44MEw3NDcuODAgMEw3MDMuNjAgMEw3MDMuNjAtMTM3LjYwTDc0Ny44MC0xMzcuNjBMNzQ3LjgwLTc4LjgwWk0xMDA3LjIwLTU1LjQwTDEwMDcuMjAtNTUuNDBRMTAwNy4yMC0yNy4yMCA5ODkuNDAtMTIuNDBMOTg5LjQwLTEyLjQwTDk4OS40MC0xMi40MFE5NzEuNjAgMi40MCA5MzguODAgMi40MEw5MzguODAgMi40MEw5MzguODAgMi40MFE5MDYuMDAgMi40MCA4ODguMTAtMTIuNDBMODg4LjEwLTEyLjQwTDg4OC4xMC0xMi40MFE4NzAuMjAtMjcuMjAgODcwLjIwLTU1LjQwTDg3MC4yMC01NS40MEw4NzAuMjAtMTM3LjYwTDkxNC40MC0xMzcuNjBMOTE0LjQwLTU2TDkxNC40MC01NlE5MTQuNDAtNDQuNDAgOTIwLjYwLTM3LjUwTDkyMC42MC0zNy41MEw5MjAuNjAtMzcuNTBROTI2LjgwLTMwLjYwIDkzOC42MC0zMC42MEw5MzguNjAtMzAuNjBMOTM4LjYwLTMwLjYwUTk1MC40MC0zMC42MCA5NTYuNzAtMzcuNjBMOTU2LjcwLTM3LjYwTDk1Ni43MC0zNy42MFE5NjMuMDAtNDQuNjAgOTYzLjAwLTU2TDk2My4wMC01Nkw5NjMuMDAtMTM3LjYwTDEwMDcuMjAtMTM3LjYwTDEwMDcuMjAtNTUuNDBaTTExOTguODAgMEwxMTU1IDBMMTE1NS00OS42MEwxMTU1LTQ5LjYwUTExNTUtNTguODAgMTE1NS43MC02OC41MEwxMTU1LjcwLTY4LjUwTDExNTUuNzAtNjguNTBRMTE1Ni40MC03OC4yMCAxMTU3LjIwLTg0LjgwTDExNTcuMjAtODQuODBMMTE1Ny4yMC04NC44MFExMTU4LTkxLjQwIDExNTguMjAtOTMuMjBMMTE1OC4yMC05My4yMEwxMTU3LjQwLTkzLjIwTDExMzIgMEwxMDk3LjQwIDBMMTA3MS44MC05M0wxMDcxLTkzTDEwNzEtOTNRMTA3MS4yMC05MS4yMCAxMDcyLjEwLTg0LjcwTDEwNzIuMTAtODQuNzBMMTA3Mi4xMC04NC43MFExMDczLTc4LjIwIDEwNzMuODAtNjguNTBMMTA3My44MC02OC41MEwxMDczLjgwLTY4LjUwUTEwNzQuNjAtNTguODAgMTA3NC42MC00OS42MEwxMDc0LjYwLTQ5LjYwTDEwNzQuNjAgMEwxMDM0IDBMMTAzNC0xMzcuNjBMMTA5Ni40MC0xMzcuNjBMMTExNy4yMC01OC4yMEwxMTE4LTU4LjIwTDExMzguNjAtMTM3LjYwTDExOTguODAtMTM3LjYwTDExOTguODAgMFpNMTM2NC42MCAwTDEzMTcuODAgMEwxMzEyLjAwLTE5LjQwTDEyNjMuODAtMTkuNDBMMTI1OC4wMCAwTDEyMTIuODAgMEwxMjYzLjAwLTEzNy42MEwxMzE0LjQwLTEzNy42MEwxMzY0LjYwIDBaTTEyODcuNjAtOTkuMjBMMTI3My4wMC01MC4yMEwxMzAyLjgwLTUwLjIwTDEyODguNDAtOTkuMjBMMTI4Ny42MC05OS4yMFpNMTUxMS44MC05NS40MEwxNTExLjgwLTk1LjQwUTE1MTEuODAtODIuODAgMTUwNS03Mi42MEwxNTA1LTcyLjYwTDE1MDUtNzIuNjBRMTQ5OC4yMC02Mi40MCAxNDg1LjIwLTU3LjYwTDE0ODUuMjAtNTcuNjBMMTUxNS44MCAwTDE0NjYuMjAgMEwxNDQxLjgwLTUwLjIwTDE0MjUuNDAtNTAuMjBMMTQyNS40MCAwTDEzODEuMjAgMEwxMzgxLjIwLTEzNy42MEwxNDY1LjQwLTEzNy42MEwxNDY1LjQwLTEzNy42MFExNDgwLjIwLTEzNy42MCAxNDkwLjcwLTEzMS45MEwxNDkwLjcwLTEzMS45MEwxNDkwLjcwLTEzMS45MFExNTAxLjIwLTEyNi4yMCAxNTA2LjUwLTExNi41MEwxNTA2LjUwLTExNi41MEwxNTA2LjUwLTExNi41MFExNTExLjgwLTEwNi44MCAxNTExLjgwLTk1LjQwTDE1MTEuODAtOTUuNDBaTTE0NjYuODAtOTMuNjBMMTQ2Ni44MC05My42MFExNDY2LjgwLTk5IDE0NjMuMjAtMTAyLjYwTDE0NjMuMjAtMTAyLjYwTDE0NjMuMjAtMTAyLjYwUTE0NTkuNjAtMTA2LjIwIDE0NTQuNDAtMTA2LjIwTDE0NTQuNDAtMTA2LjIwTDE0MjUuNDAtMTA2LjIwTDE0MjUuNDAtODAuODBMMTQ1NC40MC04MC44MEwxNDU0LjQwLTgwLjgwUTE0NTkuNjAtODAuODAgMTQ2My4yMC04NC41MEwxNDYzLjIwLTg0LjUwTDE0NjMuMjAtODQuNTBRMTQ2Ni44MC04OC4yMCAxNDY2LjgwLTkzLjYwTDE0NjYuODAtOTMuNjBaIiBmaWxsPSIjY2NjIj48L3BhdGg+PC9nPjwvZz48c3R5bGU+dGV4dCB7CiAgZm9udC1zaXplOiA2NHB4OwogIGZvbnQtZmFtaWx5OiBBcmlhbCBCbGFjazsKICBkb21pbmFudC1iYXNlbGluZTogY2VudHJhbDsKICB0ZXh0LWFuY2hvcjogbWlkZGxlOwp9PC9zdHlsZT48L3N2Zz4=";
const name_small_svg =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODY4LjY0MDAxNDY0ODQzNzVweCIgaGVpZ2h0PSIzODguMjc5OTkyNjc1NzgxMnB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xODQuMzIwMDA3MzI0MjE4NzUgLTExOS4xMzk5OTYzMzc4OTA2MSA4NjguNjQwMDE0NjQ4NDM3NSAzODguMjc5OTkyNjc1NzgxMiIgc3R5bGU9ImJhY2tncm91bmQ6IG5vbmU7IiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCI+PGRlZnM+PGZpbHRlciBpZD0iZWRpdGluZy1ob2xlIiB4PSItMTAwJSIgeT0iLTEwMCUiIHdpZHRoPSIzMDAlIiBoZWlnaHQ9IjMwMCUiPjxmZUZsb29kIGZsb29kLWNvbG9yPSIjMDAwIiByZXN1bHQ9ImJsYWNrIj48L2ZlRmxvb2Q+PGZlTW9ycGhvbG9neSBvcGVyYXRvcj0iZGlsYXRlIiByYWRpdXM9IjIiIGluPSJTb3VyY2VHcmFwaGljIiByZXN1bHQ9ImVyb2RlIj48L2ZlTW9ycGhvbG9neT48ZmVHYXVzc2lhbkJsdXIgaW49ImVyb2RlIiBzdGREZXZpYXRpb249IjQiIHJlc3VsdD0iYmx1ciI+PC9mZUdhdXNzaWFuQmx1cj48ZmVPZmZzZXQgaW49ImJsdXIiIGR4PSIyIiBkeT0iMiIgcmVzdWx0PSJvZmZzZXQiPjwvZmVPZmZzZXQ+PGZlQ29tcG9zaXRlIG9wZXJhdG9yPSJhdG9wIiBpbj0ib2Zmc2V0IiBpbjI9ImJsYWNrIiByZXN1bHQ9Im1lcmdlIj48L2ZlQ29tcG9zaXRlPjxmZUNvbXBvc2l0ZSBvcGVyYXRvcj0iaW4iIGluPSJtZXJnZSIgaW4yPSJTb3VyY2VHcmFwaGljIiByZXN1bHQ9ImlubmVyLXNoYWRvdyI+PC9mZUNvbXBvc2l0ZT48L2ZpbHRlcj48L2RlZnM+PGcgZmlsdGVyPSJ1cmwoI2VkaXRpbmctaG9sZSkiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01NC43MDAwMDQ1Nzc2MzY3MiwgMTQ1KSI+PHBhdGggZD0iTTE1My44MCAwTDEwNyAwTDEwMS4yMC0xOS40MEw1My0xOS40MEw0Ny4yMCAwTDIgMEw1Mi4yMC0xMzcuNjBMMTAzLjYwLTEzNy42MEwxNTMuODAgMFpNNzYuODAtOTkuMjBMNjIuMjAtNTAuMjBMOTItNTAuMjBMNzcuNjAtOTkuMjBMNzYuODAtOTkuMjBaTTMwNy40MCAwTDI2OC44MCAwTDIxMS4wMC02Ni44MEwyMTEuMDAgMEwxNzAuNDAgMEwxNzAuNDAtMTM3LjYwTDIwOS4wMC0xMzcuNjBMMjY2LjgwLTY5LjgwTDI2Ni44MC0xMzcuNjBMMzA3LjQwLTEzNy42MEwzMDcuNDAgMFpNNDc0LjAwLTU1LjQwTDQ3NC4wMC01NS40MFE0NzQuMDAtMjcuMjAgNDU2LjIwLTEyLjQwTDQ1Ni4yMC0xMi40MEw0NTYuMjAtMTIuNDBRNDM4LjQwIDIuNDAgNDA1LjYwIDIuNDBMNDA1LjYwIDIuNDBMNDA1LjYwIDIuNDBRMzcyLjgwIDIuNDAgMzU0LjkwLTEyLjQwTDM1NC45MC0xMi40MEwzNTQuOTAtMTIuNDBRMzM3LjAwLTI3LjIwIDMzNy4wMC01NS40MEwzMzcuMDAtNTUuNDBMMzM3LjAwLTEzNy42MEwzODEuMjAtMTM3LjYwTDM4MS4yMC01NkwzODEuMjAtNTZRMzgxLjIwLTQ0LjQwIDM4Ny40MC0zNy41MEwzODcuNDAtMzcuNTBMMzg3LjQwLTM3LjUwUTM5My42MC0zMC42MCA0MDUuNDAtMzAuNjBMNDA1LjQwLTMwLjYwTDQwNS40MC0zMC42MFE0MTcuMjAtMzAuNjAgNDIzLjUwLTM3LjYwTDQyMy41MC0zNy42MEw0MjMuNTAtMzcuNjBRNDI5LjgwLTQ0LjYwIDQyOS44MC01Nkw0MjkuODAtNTZMNDI5LjgwLTEzNy42MEw0NzQuMDAtMTM3LjYwTDQ3NC4wMC01NS40MFpNNjA3LjQwLTQ3LjgwTDYwNy40MC00Ny44MFE2MDcuNDAtMjIgNTkyLjcwLTkuODBMNTkyLjcwLTkuODBMNTkyLjcwLTkuODBRNTc4LjAwIDIuNDAgNTUwLjQwIDIuNDBMNTUwLjQwIDIuNDBMNTUwLjQwIDIuNDBRNTIyLjgwIDIuNDAgNTA4LjEwLTkuODBMNTA4LjEwLTkuODBMNTA4LjEwLTkuODBRNDkzLjQwLTIyIDQ5My40MC00Ny44MEw0OTMuNDAtNDcuODBMNDkzLjQwLTQ5LjYwTDUzNC44MC00OS42MEw1MzQuODAtNDhMNTM0LjgwLTQ4UTUzNC44MC0zOC42MCA1MzguMzAtMzQuNjBMNTM4LjMwLTM0LjYwTDUzOC4zMC0zNC42MFE1NDEuODAtMzAuNjAgNTQ5LjAwLTMwLjYwTDU0OS4wMC0zMC42MEw1NDkuMDAtMzAuNjBRNTU2LjIwLTMwLjYwIDU1OS43MC0zNC42MEw1NTkuNzAtMzQuNjBMNTU5LjcwLTM0LjYwUTU2My4yMC0zOC42MCA1NjMuMjAtNDhMNTYzLjIwLTQ4TDU2My4yMC0xMzcuNjBMNjA3LjQwLTEzNy42MEw2MDcuNDAtNDcuODBaIiBmaWxsPSIjY2NjIj48L3BhdGg+PC9nPjwvZz48c3R5bGU+dGV4dCB7CiAgZm9udC1zaXplOiA2NHB4OwogIGZvbnQtZmFtaWx5OiBBcmlhbCBCbGFjazsKICBkb21pbmFudC1iYXNlbGluZTogY2VudHJhbDsKICB0ZXh0LWFuY2hvcjogbWlkZGxlOwp9PC9zdHlsZT48L3N2Zz4=";

function NameOffScreenCanvas({
  isMobile = false,
  isLoaded,
  setIsLoaded,
  environment = "production",
}) {
  const canvasRef = React.useRef(null);
  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    if (environment === "development" && counter === 0) {
      setCounter((prev) => prev + 1);
      return;
    }
    const canvas = canvasRef.current;
    if (!canvas) return;

    // set up webgl canvas worker
    const offscreenCanvas = canvas.transferControlToOffscreen();
    const nameCanvasWorker = new Worker("/workers/nameCanvasWorker.js", {});
    nameCanvasWorker.postMessage(
      {
        command: "init",
        canvas: offscreenCanvas,
        isMobile: isMobile,
      },
      [offscreenCanvas]
    );

    // load name image and send to worker
    let img = new Image();
    img.src = !isMobile ? name_big_svg : name_small_svg;
    img.onload = function () {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, img.width, img.height);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

      nameCanvasWorker.postMessage({
        command: "setNameTexture",
        image: imageData,
      });
    };

    // toggle mode uniform's value
    function handleModeToggle() {
      nameCanvasWorker.postMessage({ command: "toggleModeUniform" });
    }
    canvas.addEventListener("click", handleModeToggle);

    // set up mouse and touch events
    let handleMouseMove = null;
    let handleMouseLeave = null;
    if (!isMobile) {
      handleMouseMove = (event) => {
        const canvasRect = canvas.getBoundingClientRect();
        // normalize position into [0, 1] and flip y
        const x = (event.clientX - canvasRect.left) / canvasRect.width;
        const y = 1 - (event.clientY - canvasRect.top) / canvasRect.height;
        const point = {
          x: x,
          y: y,
        };
        nameCanvasWorker.postMessage({ command: "addPoint", point: point });
        nameCanvasWorker.postMessage({
          command: "updateMousePosition",
          mousePosition: { x, y },
        });
      };
      handleMouseLeave = () => {
        nameCanvasWorker.postMessage({
          command: "updateMousePosition",
          mousePosition: { x: -10000, y: -10000 },
        });
      };
      canvas.addEventListener("mousemove", handleMouseMove);
      canvas.addEventListener("mouseleave", handleMouseLeave);
    }
    let handleTouchMove = null;
    let handleTouchEnd = null;
    if (isMobile) {
      handleTouchMove = (event) => {
        const touch = event.touches[0];
        const canvasRect = canvas.getBoundingClientRect();
        // normalize position into [0, 1] and flip y
        const x = (touch.clientX - canvasRect.left) / canvasRect.width;
        const y = 1 - (touch.clientY - canvasRect.top) / canvasRect.height;
        const point = {
          x: x,
          y: y,
        };
        nameCanvasWorker.postMessage({ command: "addPoint", point: point });
        nameCanvasWorker.postMessage({
          command: "updateMousePosition",
          mousePosition: { x, y },
        });
      };
      handleTouchEnd = () => {
        nameCanvasWorker.postMessage({
          command: "updateMousePosition",
          mousePosition: { x: -10000, y: -10000 },
        });
      };
      canvas.addEventListener("touchmove", handleTouchMove);
      canvas.addEventListener("touchend", handleTouchEnd);
    }

    setIsLoaded(true);

    return () => {
      setIsLoaded(false);
      canvas.removeEventListener("click", handleModeToggle);
      if (!isMobile) {
        handleMouseMove &&
          canvas.removeEventListener("mousemove", handleMouseMove);
        handleMouseLeave &&
          canvas.removeEventListener("mouseleave", handleMouseLeave);
      }
      if (isMobile) {
        handleTouchMove &&
          canvas.removeEventListener("touchmove", handleTouchMove);
        handleTouchEnd &&
          canvas.removeEventListener("touchend", handleTouchEnd);
      }
      nameCanvasWorker.postMessage({ command: "cleanUp" });
      nameCanvasWorker.terminate();
    };
  }, [isMobile, setIsLoaded, environment, counter]);

  return (
    <canvas
      ref={canvasRef}
      className={clsx(
        "w-full h-auto cursor-pointer aspect-[700/329] sm:aspect-[2304/384] touch-none select-none",
        isMobile ? "block sm:hidden" : "hidden sm:block",
        isLoaded ? "opacity-100" : "opacity-0"
      )}
    />
  );
}

const MemoizedNameOffScreenCanvas = React.memo(NameOffScreenCanvas);
export default MemoizedNameOffScreenCanvas;
