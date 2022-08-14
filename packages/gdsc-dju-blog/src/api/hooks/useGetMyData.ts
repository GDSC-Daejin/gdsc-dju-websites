import Cookies from 'js-cookie';
import { useCookies } from 'react-cookie';
import { useQuery } from 'react-query';
import TokenService from '../TokenService';
import UserService from '../UserService';

export const getUserData = async (token: string) => {
    const response = await UserService.getMyData(token);
    return response.data.body.data;
};
export const getMyToken = async (refreshToken: string, token: string) => {
    const response = await TokenService.getRefresh(refreshToken, token);
    if (response.data.header.code !== 200 || response.status !== 200) {
        Cookies.remove('token');
        Cookies.remove('refresh_token');
    }
    return response.data.body.data.token;
};

export const useGetMyData = () => {
    const [cookies, setCookies] = useCookies(['refresh_token', 'token']);
    const isEnabled = !!(cookies.token && cookies.refresh_token);
    const { data: userData } = useQuery(
        [cookies.token, `${cookies.token}`],
        () => getUserData(cookies.token),
        {
            refetchInterval: 20 * 60 * 1000,
            enabled: isEnabled,
            onError: () => {
                const newToken = getMyToken(cookies.refresh_token, cookies.token);
                if (newToken) {
                    setCookies('token', newToken);
                }
            },
        },
    );

    return { userData: userData ?? userData };
};
