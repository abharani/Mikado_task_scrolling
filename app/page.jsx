"use client";

import ParallaxScroll from "./components/ParallaxScroll";
import FlipWordsDemo from "./pages/heading";


 export default function Home() {
   return (
     <div className=" w-full h-screen m-auto ">
       <div className="  ">
         <img className="bg-black " src="./homeimage.webp" />
         <FlipWordsDemo />
       </div>
       <div className=" ">
         <ParallaxScroll images={images} videos={videos} />
       </div>



       {/* <div className="mx-[5vw] bg-red-300 flex gap-[5vw] ">
         <div className="bg-red-50 w-[30vw]">
           <div>
             <img src="./jpg.webp" />
             <h1 className="text-2xl">heading</h1>
             <h6>sub</h6>
           </div>
           <div>
             <img src="./jpg.webp" />
             <h1 className="text-2xl">heading</h1>
             <h6>sub</h6>
           </div>
           <div>
             <img src="./jpg.webp" />
             <h1 className="text-2xl">heading</h1>
             <h6>sub</h6>
           </div>
           v
           <div>
             <img src="./jpg.webp" />
             <h1 className="text-2xl">heading</h1>
             <h6>sub</h6>
           </div>
           <div>
             <img src="./jpg.webp" />
             <h1 className="text-2xl">heading</h1>
             <h6>sub</h6>
           </div>
           <div>
             <img src="./jpg.webp" />
             <h1 className="text-2xl">heading</h1>
             <h6>sub</h6>
           </div>
         </div>
         <div className="bg-red-600 w-[30vw] ">
           col-2
           <div>
             <img src="./jpg.webp" />
             <h1 className="text-2xl">heading</h1>
             <h6>sub</h6>
           </div>
           <div>
             <img src="./jpg.webp" />
             <h1 className="text-2xl">heading</h1>
             <h6>sub</h6>
           </div>
         </div>
         <div className="bg-red-900 w-[30vw]">
           col-3
           <div>
             <img src="./jpg.webp" />
             <h1 className="text-2xl">heading</h1>
             <h6>sub</h6>
           </div>
           <div>
             <img src="./jpg.webp" />
             <h1 className="text-2xl">heading</h1>
             <h6>sub</h6>
           </div>
         </div>
       </div> */}
     </div>
   );
 }
const images = [
  "https://images.ctfassets.net/9uhkiji6mhey/6dtAi4XAkX630cXhx2oqWP/c73e6dc973736e65651af14892d47f35/Thumbnail_-_Image_-_Portrait-new.jpg?w=980&fm=jpg&q=100",
  "https://images.ctfassets.net/9uhkiji6mhey/2gcPv71pamp2VRNGddYLcC/faf1e950b297964178d376c2d563fa2d/Thumbnail_-_Video_-_Portrait_-_Big.png?w=980&fm=jpg",
  " https://images.ctfassets.net/9uhkiji6mhey/GiJwvriAvVLRfOvapmlmi/93c3aee3a32433257b383c9d709f9575/Undo-the-Firewall_Thumbnail_Landscape.jpg?w=980&fm=jpg&q=100",
  "https://images.ctfassets.net/9uhkiji6mhey/5VRn088p8CCLupC3WRry1F/aea92bc664d5319521db1296db51d66c/esm-landscape.jpg?w=980&fm=jpg&q=100",
  "https://images.ctfassets.net/9uhkiji6mhey/4HEpLy3NDY7Qv2YniOdenf/246ebcd66472cb5d778b9d5cd7581a43/Thumbnail_-_Image_-_Portrait-logo.png?w=980&fm=jpg",
  "https://images.ctfassets.net/9uhkiji6mhey/5FMoiYKEbuGf3lNnzrZELp/140a33170df7fc412ba189e2610f759f/Thumbnail_-_Image_-_Landscape.jpg?w=980&fm=jpg&q=100",
  "https://images.ctfassets.net/9uhkiji6mhey/5XpQUxGWDjvyeXyhKBQQaU/9707d9571ccf778dd81bff7e34683c7e/Hero_portrait.jpg?w=980&fm=jpg&q=100",
  "https://images.ctfassets.net/9uhkiji6mhey/7tU90ZsfGsa8GNplsv5Xlg/7aa4434ea99f1b5da3e34fe27841b7f9/StarAtlas-Thumbnail_-_Image_-_Landscape.jpg?w=980&fm=jpg&q=100",
  "https://images.ctfassets.net/9uhkiji6mhey/2LFuBOunWwrleUGq9kcr26/b904556c24bb041d44bc34665f835512/Thumbnail_-_Image_-_Portrait.jpg?w=980&fm=jpg&q=100",
  // "/grad3.webp",
  // "/advisor5.jpg",
  // "/students.webp",
  // "/jpg.webp",
  // "/land3.webp",
  // "/Bg.jpg",
];
const videos = [
  "https://videos.ctfassets.net/9uhkiji6mhey/5aPyBNQQ3mGEpUwoYagcWF/3fd91496cde7c0310f098657e02a6dbb/Thumbnail_-_Video_-_Portrait_-_Big-NEW.mp4",
  "https://videos.ctfassets.net/9uhkiji6mhey/12ZMYVLIBKAeMxprQpMwMG/69328a415938f4f64ca6fbc0002bd951/Thumbnail_-_Image_-_Portrait.mp4",
  "https://videos.ctfassets.net/9uhkiji6mhey/6LVh3az7KUF6NOAjEwy5QE/64315dc4c649067739df1c99b4c90f31/Hero_loop.mp4",
  "https://videos.ctfassets.net/9uhkiji6mhey/4ucqGMyuf982kCb3PTEtnV/6e4c06ef941a602f2d239d1a7737d7df/esm-landscape_1.mp4",
  "https://videos.ctfassets.net/9uhkiji6mhey/7pAXlJdKv3hvY4OAf5YWzz/7f0fa564c5a37c44b6551f786b15e1c3/3_____Portrait_-_Big.mp4",
  "https://videos.ctfassets.net/9uhkiji6mhey/47n1rKjtT95R5ZX9zDXE94/49cb8d69a120bfa617404ed7316346cf/Thumbnail-Landscape.mp4",
  "https://videos.ctfassets.net/9uhkiji6mhey/2YkOhA9dA2s7z6hA6RnjRm/fb4acc05946f95c8c52973495e32bb65/Hero_____portrait.mp4",
  "https://videos.ctfassets.net/9uhkiji6mhey/3ydqPS1XpMKresvwz7m1mh/142236bf4d384840657b728ade426907/Star_Atlas_Hero_Landscape.mp4",
  "https://videos.ctfassets.net/9uhkiji6mhey/4EnXBwonimbaeOBtAj7jus/2aae324f0862681803506ce2aad774ad/main_logo_768x1014.mp4",
];