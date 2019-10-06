import mongoose from 'mongoose'

const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50
    },
    status: {
      type: String,
      required: true,
      enum: ['active', 'complete', 'pastdue'], // 值只能在这三个枚举的值中
      default: 'active'
    },
    notes: String,
    due: Date,
    createdBy: {
      ref: 'user',
      required: true,
      type: mongoose.SchemaTypes.ObjectId // 会在user表中，寻找出这个id的user
    },
    list: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'list',
      required: true
    }
  },
  { timestamps: true }
)
/* list:1, name:1是有顺序的，mongoose用BJSON来使object有顺序，
会先找到list后找name，否则就是找到所有name的表，后找到list表。
这里表示相同list的item数据中的name必须是唯一的
*/
itemSchema.index({ list: 1, name: 1 }, { unique: true })
export const Item = mongoose.model('item', itemSchema)
