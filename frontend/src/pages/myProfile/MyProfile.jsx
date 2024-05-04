import { Link } from 'react-router-dom';
import './MyProfile.scss'
import { GrLocation } from "react-icons/gr";
import { RxOpenInNewWindow } from "react-icons/rx";
import { languages, levels, skillsByDomain } from '../../data';
import React, { useEffect, useState } from 'react';
import { MdOutlineModeEdit } from "react-icons/md";
import Select from 'react-select';
import { LiaUserEditSolid } from "react-icons/lia";
import { useDispatch, useSelector } from 'react-redux';
import { updateUserData } from '../../redux/User';
import { BiEditAlt } from "react-icons/bi";
import { addLanguage, addSkills, deleteLanguage, deleteSkill, updateLanguage } from '../../redux/SkillsLang';
import { MdDeleteForever } from "react-icons/md";
import { RiDeleteBinLine, RiUploadCloud2Line } from "react-icons/ri";

export default function MyProfile() {
    const [selectedSkills, setSelectedSkills] = useState(null);
    const [selectedLanguages, setSelectedLanguages] = useState([]);
    const [selectedLevels, setSelectedLevels] = useState([]);
    const [languageId, setLangId] = useState(null)
    const [LanguagesData, setLanguagesData] = useState(null);
    const [SkillsData, setSkillsData] = useState(null);
    const [isOpen, setOpen] = useState(null)
    const errors = useSelector(u => u.user.user);

    const user = useSelector(u => u.user.user)
    const [userData, setUserData] = useState(user && {
        bio: user.bio,
        displayName: user.displayName,
    })

    const options1 = skillsByDomain.map(skill => ({ value: skill, label: skill }))
    const options2 = languages.map(l => ({ value: l, label: l }))
    const options3 = levels.map(lvl => ({ value: lvl, label: lvl }))

    const dispatch = useDispatch()
    const token = JSON.parse(localStorage.getItem('token'))

    const handleSkillSelect = (selected) => {
        setSelectedSkills(selected);
    };
    const handleLanguageSelect = (selected) => {
        setSelectedLanguages(selected);
    };
    const handleLevelSelect = (selected) => {
        setSelectedLevels(selected);
    };

    const handleChange = (e) => {
        e.preventDefault();
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setUserData({ ...userData, profileImg: file })
    };
    const handSubmit = () => {
        if (userData.profileImg) {
            const updatedData = {
                ...userData,
                profileImg: userData.profileImg
            };
            dispatch(updateUserData({ token, updatedData: updatedData }));
        }
        dispatch(updateUserData({ token, updatedData: userData }));
        setUserData({
            bio: user.bio,
            displayName: user.displayName,
        });
        setOpen(null);

    }

    const handSubmitLang = () => {
        setOpen(null);
        if (!languageId) {
            dispatch(addLanguage(LanguagesData))
        } else {
            dispatch(updateLanguage({ id: languageId, updatedData: LanguagesData }))
        }
    }
    const handlEditeLng = (language) => {
        setLangId(language.id)
        setOpen('languages')
        setSelectedLanguages({ value: language.name, label: language.name })
        setSelectedLevels({ value: language.level, label: language.level })
    }

    const handSubmitLSkill = async () => {
        setOpen(null);
        dispatch(addSkills(SkillsData))
    }

    useEffect(() => {
        setLanguagesData({
            user_id: user.id,
            level: selectedLevels.value,
            name: selectedLanguages.value
        })
        setSkillsData({
            user_id: user.id,
            title: selectedSkills && selectedSkills.map(sk => sk.value)
        })
    }, [selectedLanguages, selectedLevels, selectedSkills])

    const cancelButton = () => {
        setOpen(null)
        setUserData({
            bio: user.bio,
            displayName: user.displayName,
        });
        setSelectedLanguages([]);
        setSelectedLevels([])
        setSelectedSkills(null)
    }
    // useEffect(() => {
    //     if (userData.profileImg) {
    //         handSubmit();
    //     }
    // }, [userData.profileImg]);

    // window.scrollTo(0, 0);
    console.log(userData)
    return (
        <div className='profile'>
            <div className='container'>
                <div className='content1'>
                    <LiaUserEditSolid className='edit' size="26px" onClick={() => setOpen('profile')} />
                    <div className='items'>
                        <div className='relative inline-block'>
                            <img
                                src={userData.profileImg ? URL.createObjectURL(userData.profileImg) : 'cute.png'}
                                className="w-40 h-40 rounded-full"
                            />
                            <div class="divImage flex flex-col gap-2 top-0 group hover:bg-gray-200 opacity-60 rounded-full absolute justify-center items-center cursor-pointer transition duration-500">
                                <input type="file" name='profileImg' class="hidden" id="imageInput" encType="multipart/form-data" onChange={handleFileChange} />
                                <div>
                                    <RiDeleteBinLine class="hidden group-hover:block text-gray-600 hover:text-black " size="28px" alt="" />
                                </div>
                                <label for="imageInput" className='cursor-pointer'>
                                    <div>
                                        <RiUploadCloud2Line class="hidden group-hover:block text-gray-600 hover:text-black" size="30px" alt="" />
                                    </div>
                                </label>
                            </div>
                            <span class="bottom-0 right-5 absolute  w-5 h-5 bg-green-400 border-2 border-white  rounded-full"></span>
                        </div>

                        {isOpen === 'profile' ? (
                            <>
                                <input type='text' name='displayName' value={userData.displayName || ''} placeholder='Add your display name' onChange={handleChange} />
                                <div className='online'>
                                    <span className='spn'>online</span>
                                    <div className='location'>
                                        <GrLocation />
                                        <span>{user.country}</span>
                                    </div>
                                </div>
                                <input type='text' name='bio' value={userData.bio || ''} placeholder='Add your short bio' onChange={handleChange} />
                                {errors?.error?.title && <span className="text-sm text-red-600">{errors.error.title}</span>}
                                <div className='buttons'>
                                    <button className='button1' onClick={handSubmit}>Save</button>
                                    <button className='button2' onClick={() => setOpen(null)}>Cancel</button>
                                </div>
                            </>
                        ) : (
                            <>
                                <span className='mySpan'><p>{user.displayName && user.displayName}</p><span>(@{user.fname}{user.lname})</span></span>
                                <span>{!user.displayName && <span className='text-gray-500 text-sm font-serif'>Add display name..</span>}</span>
                                <div className='online'>
                                    <span className='spn'>online</span>
                                    <div className='location'>
                                        <GrLocation />
                                        <span>{user.country}</span>
                                    </div>
                                </div>
                                <time datetime="2014-08-16 19:00" class="block font-medium text-sm text-gray-500">Joined on August 2014</time>
                                <div className='pcontent'>
                                    <p>{user.bio ? user.bio : <span className='text-gray-500'>Add short bio..</span>}</p>
                                </div>
                                <div>
                                    <Link className='Link' to='/profile'><RxOpenInNewWindow /><span>Click to view profile</span></Link>
                                </div>
                            </>
                        )}
                    </div>
                </div>
                <div className='form'>
                    <div className="content2">
                        <div className="items">
                            <div className='label'>
                                <label>
                                    <span>Description :</span>
                                </label>
                                {isOpen !== 'description' ? (
                                    <div>
                                        <button >
                                            <BiEditAlt onClick={() => setOpen('description')} className='iconx' size="18px" />
                                        </button>
                                    </div>

                                ) :
                                    <div className='buttons'>
                                        <button className='button1' onClick={handSubmit}>Save</button>
                                        <button className='button2' onClick={cancelButton}>Cancel</button>
                                    </div>
                                }
                            </div>
                            <textarea name='description' value={userData.description || user.description || ''} placeholder="About me.. " disabled={isOpen !== 'description'} onChange={handleChange}></textarea>
                        </div>

                        <div className="items">
                            <div className='label'>
                                <label>
                                    <span>Website URL:</span>
                                </label>
                                {isOpen === 'url' ? (
                                    <div className='buttons'>
                                        <button className='button1' onClick={handSubmit}>Save</button>
                                        <button className='button2' onClick={cancelButton}>Cancel</button>
                                    </div>
                                ) :
                                    <BiEditAlt onClick={() => setOpen('url')} className='iconx' size="18px" />
                                }
                            </div>
                            <input name='url' type="text" value={userData.url || user.url || ''} placeholder="http://liverr.com" disabled={isOpen !== 'url'} onChange={handleChange} />

                            <div className='label'>
                                <label>
                                    <span>Skills :</span>
                                </label>
                                {isOpen === 'skills' && (
                                    <div className='buttons'>
                                        <button className='button1' onClick={handSubmitLSkill}>Save</button>
                                        <button className='button2' onClick={cancelButton}>Cancel</button>
                                    </div>
                                )}
                            </div>
                            <div className='language'>
                                {isOpen !== 'skills' ? <button className='button0' onClick={() => setOpen('skills')}>Add new Skill</button> : (
                                    <Select name='title' className='select'
                                        styles={{
                                            control: (baseStyles) => ({
                                                ...baseStyles,
                                                border: 'none',
                                                boxShadow: 'none',
                                            }),
                                        }}
                                        isMulti
                                        value={selectedSkills}
                                        options={options1}
                                        onChange={handleSkillSelect}
                                        placeholder="Select skill..."
                                        isSearchable
                                    />
                                )}
                                <div className='skillDiv'>
                                    {user.skills?.map(skill =>
                                        <span>
                                            {skill.title}
                                            <MdDeleteForever onClick={() => dispatch(deleteSkill(skill.id))} className='icon' size='18px' />
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className='itemDiv2'>
                            <div className="items">
                                <div className='label'>
                                    <label>
                                        <span>Languages :</span>
                                    </label>
                                    {isOpen === 'languages' && (
                                        <div className='buttons'>
                                            <button className='button1' onClick={handSubmitLang}>Save</button>
                                            <button className='button2' onClick={cancelButton}>Cancel</button>
                                        </div>
                                    )}
                                </div>
                                <div className='language'>
                                    {isOpen !== 'languages' ? <button className='button0' onClick={() => setOpen('languages')}>Add new Language</button> : (
                                        <>
                                            <div className='selects'>
                                                <Select name='name' className='select'
                                                    styles={{
                                                        control: () => ({
                                                            padding: '4px',
                                                            borderRadius: '6px',
                                                            cursor: 'text',
                                                            width: '14rem'
                                                        }),
                                                        dropdownIndicator: () => ({
                                                            display: 'none',
                                                        }),
                                                        singleValue: (baseStyles) => ({
                                                            ...baseStyles,
                                                            borderBottom: '1px solid black',
                                                            width: 'max-content',
                                                            padding: '2px 10px',
                                                            borderRadius: '3px'
                                                        }),
                                                    }}
                                                    value={selectedLanguages}
                                                    options={options2}
                                                    onChange={handleLanguageSelect}
                                                    placeholder="Select language..."
                                                    isSearchable
                                                />
                                                <Select name='level' className='select'
                                                    styles={{
                                                        control: () => ({
                                                            padding: '4px',
                                                            borderRadius: '6px',
                                                            cursor: 'text',
                                                            width: '14rem'
                                                        }),
                                                        dropdownIndicator: () => ({
                                                            display: 'none',
                                                        }),
                                                        singleValue: (baseStyles, state) => ({
                                                            ...baseStyles,
                                                            borderBottom: '1px solid black',
                                                            width: 'max-content',
                                                            padding: '2px 10px',
                                                            borderRadius: '3px'
                                                        }),
                                                    }}
                                                    value={selectedLevels}
                                                    options={options3}
                                                    onChange={handleLevelSelect}
                                                    placeholder="Select level..."
                                                    isSearchable
                                                />
                                            </div>
                                        </>
                                    )}
                                    <div className='skillDiv'>
                                        {user.languages?.map(lang =>
                                            <span>
                                                {lang.name}<p>({lang.level})</p>
                                                <MdDeleteForever className='icon' onClick={() => dispatch(deleteLanguage(lang.id))} size='18px' />
                                                <MdOutlineModeEdit onClick={() => handlEditeLng(lang)} className='icon2' size='18px' />
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}