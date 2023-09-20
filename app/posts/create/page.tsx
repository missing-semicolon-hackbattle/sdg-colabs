"use client";

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {useState} from "react";

export default function App() {
    const [content, setContent] = useState("");

    return (
            <CKEditor
                editor={ ClassicEditor }
                data={content}
                onChange={ ( event, editor ) => {
                    const data = editor.data.get();
                    setContent(data);
                } }
            />
    );
}
