import {StyleSheet} from 'react-native';
import {colors} from '../../../appTheme';

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.background,
    flex: 1,
  },
  header: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  headerTitle: {
    flexDirection: 'row',
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 10,
  },
  headerLeft: {
    color: colors.primary,
    fontWeight: '300',
    padding: 10,
  },
  btnHolder: {
    flexDirection: 'row',
    width: '95%',
    marginTop: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignSelf: 'center',
    elevation: 2,
    backgroundColor: colors.white,
    borderRadius: 4,
    marginBottom: 15,
  },
  selectedBtn: {
    padding: 10,
    backgroundColor: colors.primary,
    borderRadius: 4,
    width: '45%',
    alignItems: 'center',
  },
  emptyContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  btn: {
    padding: 10,
    backgroundColor: colors.lightestGrey,
    borderRadius: 4,
    width: '45%',
    alignItems: 'center',
  },
  selectedBtnTxt: {
    fontWeight: '600',
    fontSize: 16,
    color: colors.white,
  },
  btnTxt: {
    fontWeight: '600',
    fontSize: 16,
    color: colors.midGrey,
  },
  jobDetailsHolder: {
    marginTop: 10,
    backgroundColor: colors.white,
    width: '95%',
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: 4,
  },
  jobDetailsTitle: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  jobTitle: {
    fontWeight: '700',
    color: colors.darkText,
    fontSize: 14,
  },
  jobCategory: {
    color: colors.midGrey,
    fontWeight: '600',
    fontSize: 10,
    borderWidth: 1,
    borderColor: colors.midGrey,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 2,
  },
  jobCompleted: {
    color: '#2C9984',
    fontWeight: '600',
    fontSize: 10,
    borderWidth: 1,
    borderColor: '#2C9984',
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 2,
  },
  jobCancelled: {
    color: '#E1473D',
    fontWeight: '600',
    fontSize: 10,
    borderWidth: 1,
    borderColor: '#E1473D',
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 2,
  },
  jobPending: {
    color: '#1A73E8',
    fontWeight: '600',
    fontSize: 10,
    borderWidth: 1,
    borderColor: '#1A73E8',
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 2,
  },
  jobMoneyHolder: {
    flexDirection: 'row',
    width: '90%',
    marginBottom: 10,
  },
  jobMoneyTxt: {
    fontWeight: '600',
    fontSize: 12,
    marginLeft: 10,
    color: colors.midGrey,
  },
  jobLocationTime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    width: '90%',
  },
  jobLocation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  jobTimeTxt: {
    fontWeight: '600',
    fontSize: 10,
    color: colors.lightText,
  },
});

export default styles;
