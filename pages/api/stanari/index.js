import dbConnect from '../../../utils/dbConnect';
import Stanar from '../../../models/Stanar';

dbConnect();

export default async (req, res) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const stanari = await Stanar.find({})
                res.status(200).json({ success: true, data: stanari })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;

        case 'POST':
            try {
                const stanar = await Stanar.create(req.body)
                res.status(201).json({ success: true, data: stanar })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;
        default:
            res.status(400).json({ success: false })

    }
}