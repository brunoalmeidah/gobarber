import mongoose from 'mongoose';

const NotificatioSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      requires: true,
    },
    user: {
      type: Number,
      required: true,
    },
    read: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Notification', NotificatioSchema);
