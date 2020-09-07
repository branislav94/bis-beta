import dbConnect from '../../../utils/dbConnect';
import stanar from '../../../models/Stanar';

dbConnect();

export default async (req, res) => {
    const {
        query: { id },
        method
    } = req;

    switch (method) {
        case 'GET':
            try {
                const stanar = await stanar.findById(id);

                if (!stanar) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: stanar });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'PUT':
            try {
                const stanar = await stanar.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                });

                if (!stanar) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: stanar });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'DELETE':
            try {
                const deletedstanar = await stanar.deleteOne({ _id: id });

                if (!deletedstanar) {
                    return res.status(400).json({ success: false })
                }

                res.status(200).json({ success: true, data: {} });
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;
        default:
            res.status(400).json({ success: false })
            break;
    }
}
