import Link from 'next/link';
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { Button, Form, Loader } from 'semantic-ui-react';
import { useRouter } from 'next/router';
import SiderDemo from '../../layouts/SiderDemo'

const NewStanar = () => {
    const [form, setForm] = useState({ stanar: '', direktor: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const router = useRouter();

    useEffect(() => {
        if (isSubmitting) {
            if (Object.keys(errors).length === 0) {
                createNote();
                console.log("Succes");
            }
            else {
                setIsSubmitting(false);
            }
        }
    }, [errors])

    const createNote = async () => {
        try {
            const res = await fetch('http://localhost:3000/api/stanari', {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            })
            router.push("/stanari");
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let errs = validate();
        setErrors(errs);
        setIsSubmitting(true);
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const validate = () => {
        let err = {};

        if (!form.stanar) {
            err.stanar = 'Stanar is required';
        }
        if (!form.direktor) {
            err.direktor = 'Direktor is required';
        }

        return err;
    }

    return (
        <SiderDemo>

        <div className="form-container">
            <h1>Create Note</h1>
          
            <div>
                {
                    isSubmitting
                        ? <Loader active inline='centered' />
                        : <Form onSubmit={handleSubmit}>
                            <Form.Input
                                fluid
                                error={errors.title ? { content: 'Please enter a stanar', pointing: 'below' } : null}
                                label='Stanar'
                                placeholder='Stanar'
                                name='stanar'
                                onChange={handleChange}
                            />
                            <Form.TextArea
                                fluid
                                label='Direktor'
                                placeholder='Direktor'
                                name='direktor'
                                error={errors.description ? { content: 'Please enter a description', pointing: 'below' } : null}
                                onChange={handleChange}
                            />
                            <Button type='submit'>Create</Button>
                        </Form>
                }
            </div>
        </div>
        </SiderDemo>
    )
}

export default NewStanar;