import multer from 'multer';
import crypto from 'crypto';
import { extname, resolve } from 'path';

export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'), // destino dos arquivo
    filename: (req, file, cb) => {
      // formata o nome do arquivo quando for feito o upload

      // crypto.randomBytes irá randomizar um numero que servirá de nome do arquivo
      crypto.randomBytes(16, (err, res) => {
        if (err) return cb(err);

        return cb(null, res.toString('hex') + extname(file.originalname)); // primeiro parametro seria o erro
      });
    },
  }),
};
