import { Router, Request, Response } from "express";
import Server from "../classes/server"; 

const router = Router();

router.get('/mensajes', (req: Request, res: Response) => 
{
    res.json(
        {
            ok:true,
            mensaje: 'Todo esta bien C:'
        });
})

router.post('/mensajes', (req:Request, res: Response) =>
{
    const cuerpo = req.body.cuerpo
    const de = req.body.de

    res.json(
        {
            ok: true, 
            cuerpo, 
            de
        }
    );
});


router.post('/mensajes/:para', (req:Request, res: Response) =>
{
    const cuerpo = req.body.cuerpo
    const de = req.body.de
    const para = req.params.para;

    const payload = {
         de, 
         cuerpo
    }

    const server = Server.instance;
    server.io.in(para).emit('mensaje-privado',  payload);

    res.json(
        {
            ok: true, 
            cuerpo, 
            de,
            para
        }
    );
});
export default router;