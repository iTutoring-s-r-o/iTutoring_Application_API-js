import React, { useEffect } from 'react';

import './../DebugConsole.css';
import APIController from '../apiController';
import { R_KEYs } from '../objects/Enums';
import react from 'react';
import { createRoot } from 'react-dom/client';

export const DebugConsole = () =>
{
    const [isVisible, setVisible] = React.useState(false);
    const [isTestServer, setIsTestServer] = React.useState(false);

    useEffect(() =>
    {
        APIController.GetLocalRKey().then((rkey) =>
        {
            if (rkey == R_KEYs.r_key_test)
                setIsTestServer(true);
        });
    }, []);

    const width = 600;
    const height = 400;

    var dragging = false;

    var mouseOffsetX = 0;
    var mouseOffsetY = 0;

    var dir = { x: 0, y: 0 };

    const setDragging = (state, e) =>
    {
        if (state != dragging)
        {
            const posX = e.clientX;
            const posY = e.clientY;
            var consoleElem = document.getElementById('debug-console');
            if (!consoleElem)
                return;
            const rect = consoleElem.getBoundingClientRect();
            mouseOffsetX = posX - rect.left;
            mouseOffsetY = posY - rect.top;

            if (state)
            {
                dir.x = posX;
                dir.y = posY;
            }
            else
            {
                dir.x = e.clientX - dir.x;
                dir.y = e.clientY - dir.y;
            }
        }

        dragging = state;
    }

    const updatePosition = (posX, posY) =>
    {
        if (!dragging)
            return;
        var consoleElem = document.getElementById('debug-console');
        if (!consoleElem)
            return;

        consoleElem.style.left = posX - mouseOffsetX + 'px';
        consoleElem.style.top = posY - mouseOffsetY + 'px';
    }

    const hasDragged = () =>
    {
        return dir.x > 1 || dir.y > 1;
    }

    window.addEventListener('mousemove', (e) =>
    {
        updatePosition(e.clientX, e.clientY);
    });

    const minimizeToggle = () =>
    {
        const iframe = document.getElementById('debug-console-iframe');
        if (iframe.style.display == 'none')
            iframe.style.display = '';
        else
            iframe.style.display = 'none';
    }

    if (!isTestServer)
        return null;
    return (
        <>
            <div id="debug-console">
                {
                    isVisible == false ?
                        <div
                            onMouseDown={(e) => { setDragging(true, e); }}
                            onMouseUp={(e) => { setDragging(false, e); }}
                            onClick={() => { if (!hasDragged()) setVisible(true) }} id='debug-console-icon'></div>
                        :
                        <>
                            <div
                                onMouseDown={(e) => { setDragging(true, e); }}
                                onMouseUp={(e) => { setDragging(false, e); }}
                            >
                                <div onClick={() => minimizeToggle()} className='debug-console-minimize' />
                                <div onClick={() => setVisible(false)} className='debug-console-close' />
                            </div>
                            <iframe
                                id='debug-console-iframe'
                                width={width + "px"}
                                height={height + "px"}
                                src="https://test.itutoring.cz/toolkit/lazydebug/"
                            ></iframe>
                        </>
                }
            </div>
        </>
    );
}

export const InitializeDebugConsole = () =>
{
    const debugConsoleContainer = document.createElement('div');
    document.body.appendChild(debugConsoleContainer);
    createRoot(debugConsoleContainer).render(<DebugConsole />);
}