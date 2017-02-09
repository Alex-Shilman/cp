import React from 'react';
import cx from 'classnames';


const Container = ({
    title,
    classname,
    children
}) => {
    return (
        <div className={cx('container', {[classname]: !!classname})}>
            <h2>{ title }</h2>
            { children }
        </div>
    )
}

export default Container;