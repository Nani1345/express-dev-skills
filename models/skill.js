import mongoose from 'mongoose'
import{text} from 'express'

const Schema = mongoose.Schema

const skillSchema = new Schema({
  name: String,
  level: String,
  yearsOfExperience: Number
})

const Skill = mongoose.model('Skill', skillSchema)

export {
  Skill
}