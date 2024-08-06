import {Skill} from"../models/skill.js"

async function index(req, res){
    const skills = await Skill.find({})
    res.render('skills/index', {
        skills
    })
}

async function newSkill(req, res){
    res.render('skills/new')
}

async function create(req, res){
   const newskill = await Skill.create(req.body)
   console.log(newskill)
    res.redirect('/skills')
}

async function deleteSkill(req, res){
    await Skill.findByIdAndDelete(req.params.skillId)
    res.redirect('/skills')
}

async function show(req, res){
    const skill = await Skill.findById(req.params.skillId)
    res.render('skills/show',{
        skill
    })
}

async function edit(req, res){
    const skill = await Skill.findById(req.params.skillId)
    res.render('skills/edit',{
        skill
    })
}

async function update(req, res){
    await Skill.findByIdAndUpdate(req.params.skillId, req.body,{new:true})
    res.redirect(`/skills/${req.params.skillId}`)
}

export{
    index,
    newSkill as new,
    create,
    deleteSkill as delete,
    show,
    edit,
    update
}