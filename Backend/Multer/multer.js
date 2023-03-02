import multer from "multer";
import path from "path";
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(
        null,
        // "D:\Lucent\Practice\Backend\React_form\test-app\public\Images"
        path.join(path.resolve(), "../test-app/public/Images")
      );
    },
    filename: (req, file, cb) => {
      const ext = file.mimetype.split("/")[1];
      cb(null, `img-${Date.now()}.${ext}`);
    },
  });
  
const upload = multer({
    storage: storage,
    limits: { fieldSize: 10 * 1024 * 1024 },
  });

export {storage,upload}
