// import multer from "multer";
// import { NextResponse } from "next/server";

// const upload = multer({
//   storage: multer.diskStorage({
//     destination: "./public/uploads",
//     filename: function (req, file, cb) {
//       cb(null, file.originalname);
//     },
//   }),
// });

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// export async function POST(req) {
//   try {
//     upload.single("file");
//     const filename = req.file ? req.file.originalname : null;
//     return NextResponse.json({ message: filename }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json(
//       { success: false, error: error.message },
//       { status: 500 }
//     );
//   }
// }
