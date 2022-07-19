import React from 'react';
import { styles } from './HomePageStyles';
import { FolhaA4 } from '../../components/FolhaA4/A4';

export default function HomePage() {
    return (
        <div style={styles.container}>
            <div style={styles.box}>
                <FolhaA4></FolhaA4>
            </div>
        </div>
    );
}