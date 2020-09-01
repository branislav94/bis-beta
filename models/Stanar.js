import mongoose from 'mongoose'

const StanarSchema = new mongoose.Schema({
    stanar: {
        /* Ime Stanara */
        type: String,
        required: [true, 'Molim vas upisite ime stanara'],
        maxlength: [20, 'Name cannot be more than 60 characters'],
      },
    direktor: {
        /* Ime Direktora */
        type: String,
        required: [true, 'Molim vas upisite ime Direktora'],
        maxlength: [20, 'Name cannot be more than 60 characters'],
    }
})

export default mongoose.models.Stanar || mongoose.model('Stanar', StanarSchema)
