"use client";
import * as Yup from "yup";
import {Alert, AlertDescription, AlertTitle, Box, Button, Flex, FormControl, FormLabel, Input} from "@chakra-ui/react";
import {Field, Form, Formik} from "formik";
import styles from "@/app/movies/movie.module.css";
import React, {useEffect, useState} from "react";
import {useAddReviewMutation} from "@/lib/redux/services/reviewApi";
import {useLoginMutation} from "@/lib/redux/services/authApi";
import {authSlice, selectAuth, selectCount, useDispatch, useSelector} from "@/lib/redux";
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation';
import {red} from "next/dist/lib/picocolors";
const UserSchema = Yup.object().shape({
    userName: Yup.string()
        .min(2, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Required'),
    password: Yup.string()
        .required('Required'),

});
export default function Page()
{
    const [loginError,setLoginError] = useState(false);
    const [loginApi,loginResult] = useLoginMutation();
    const dispatch = useDispatch();
    const auth = useSelector(selectAuth);
    const searchParams = useSearchParams();

    const router =useRouter();
    const redirectUrl = searchParams.get('redirectUrl');
    useEffect(()=>{
        console.log('Auth ',auth, ' redirect url ',redirectUrl);
        if(auth.token)
        {
            if(redirectUrl)
            {
                router.push(redirectUrl);
            }
            else
            {
                router.push('/');
            }

        }
    },[]);

    let initialValues = {
        userName:'',
        password:'',
    };

    function loginSuccess(data) {
        console.log('Login success ', data);
        setLoginError(false);
        dispatch(authSlice.actions.login(data));
        if(redirectUrl)
        {
            router.push(redirectUrl);
        }
        else
        {
            router.push('/');
        }

    }

    const onSubmitHandler = (values:any)=>{
      console.log('Login ',values);
      dispatch(authSlice.actions.logout());
      loginApi(values)
          .unwrap()
          .then(data=>{
              loginSuccess(data);
          },error=>{
              console.log('login failed',error);
              setLoginError(true);
          });
    };
    return(<div>
        <h1>Login</h1>
        {
            loginError && <Alert status='error'>

                <AlertTitle>Login</AlertTitle>
                <AlertDescription>Invalid Login</AlertDescription>
            </Alert>
        }
        <Flex align="center" justify="center" >

            <Box bg="white"  rounded="md">
                <Formik
                    initialValues={initialValues}
                    validationSchema={UserSchema}
                    onSubmit={onSubmitHandler}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <FormControl>
                                <FormLabel htmlFor="userName">UserName</FormLabel>
                                <Field name="userName"
                                       as={Input}
                                />
                                {errors.userName && touched.userName ? (
                                    <div className={styles.error}> {errors.userName}</div>
                                ) : null}
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="password">Password</FormLabel>
                                <Field name="password"
                                       type="password"
                                       as={Input}
                                />
                                {errors.password && touched.password ? (
                                    <div className={styles.error}>{errors.password}</div>
                                ) : null}
                            </FormControl>

                            <Button type="submit" colorScheme="purple" width="full">
                                Login
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Box>
        </Flex>
    </div>);
}