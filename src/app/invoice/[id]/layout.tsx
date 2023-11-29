import React from 'react';
import BottomControlBar from "@/components/BottomControlBar/BottomControlBar";
import {DeleteModalProvider} from "@/utils/DeleteModalProvider";
import {EditModalProvider} from "@/utils/EditModalProvider";

function Layout({children}: { children: React.ReactNode }) {
    return (
        <>
            <DeleteModalProvider>
                <EditModalProvider>
                    {children}
                </EditModalProvider>
            </DeleteModalProvider>
        </>
    );
}

export default Layout;